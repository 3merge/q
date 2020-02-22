import { get } from 'lodash';
import { array, props, url } from 'q3-ui-helpers';

const serialize = (v) =>
  Array.isArray(v) ? v.join(',') : v;

const requiresArray = (v) =>
  ['checkboxGroup', 'select', 'chips'].includes(v);

/**
 * Values are nested inside of values so that we can track operands in state.
 */
export const extractTextualValue = (v, defaultValue = '') =>
  get(v, 'value', defaultValue);

export const handleOnChange = (
  setFieldValue,
  operand,
  fn,
) => (e) => {
  setFieldValue({
    value: get(e, 'target.value'),
    operand,
  });

  if (fn) fn();
};

export const handleOnChangeBoolean = (
  setFieldValue,
  operand,
  fn,
) => (e, status) => {
  setFieldValue({
    value: status,
    operand,
  });

  if (fn) fn();
};

const getKey = (k, operand) => {
  const n = url.encode(k);
  if (operand === '!*') return `!${n}`;
  return n;
};

export const findByRegex = (a, term) =>
  array.is(a).findIndex((v) => {
    return term === v;
  });

/**
 * For wildcards, see with-location package for more information.
 * Essentially, that lib handles certain params out-of-the-box in a given format.
 */
export const queryParam = (key, operand, value) => {
  const santitized = url.checksArray(key);
  const a = serialize(value);
  const negated = `${santitized}!`;

  switch (operand) {
    case '!*':
      return [santitized, value ? operand : null];
    case '*':
      return [santitized, value ? operand : null];
    case '[]':
      return a.length
        ? [santitized, a]
        : [santitized, null];
    case '![]':
      return a.length ? [negated, a] : [negated, null];
    case '>=':
      return [`${santitized}>`, value];
    case '<=':
      return [`${santitized}<`, value];
    case '!=':
      return [`${santitized}!`, value];
    default:
      return [santitized, value];
  }
};

/**
 * Convert Formik into URL Search Params
 */
export const marshalFormFieldsIntoUrlString = (
  v = {},
  { remove },
) =>
  Object.entries(v).reduce(
    (curr, [key, { value, operand }]) => {
      const [newKey, newValue] = queryParam(
        key,
        operand,
        value,
      );

      if (!newValue) remove(getKey(newKey, operand));

      return operand
        ? Object.assign(curr, {
            [url.decode(newKey)]: newValue,
          })
        : curr;
    },
    {},
  );

const reduceArrayAsObject = (a = []) =>
  Array.isArray(a)
    ? a.reduce(
        (curr, next) => Object.assign(curr, next),
        {},
      )
    : a;

const reduceChildrenAsArray = (keys, values) => (child) => {
  const getValue = ({ name, type }) => {
    let v;
    const i = findByRegex(keys, name);

    if (array.hasIndex(i)) v = values[i];
    if (requiresArray(type)) v = array.castString(v);
    if (type === 'checkbox' && keys.includes(name))
      v = true;
    if (!v) v = '';

    return v;
  };

  const exec = (c) =>
    array.is(c).reduce(
      (acc, item) =>
        props.has(item)
          ? Object.assign(
              acc,
              {
                [get(item, 'props.name')]: {
                  value: getValue(item.props),
                },
              },
              reduceArrayAsObject(
                props.callOnChildren(item, exec),
              ),
            )
          : acc,
      {},
    );

  return exec(child);
};

/**
 * For initializing state with existing URL values.
 * Note that the values reference field names - not the keys.
 */
export const appendEmptyValues = (a, next = {}) => {
  const fn = reduceChildrenAsArray(
    Object.keys(next)
      .map(url.encode)
      .map(url.checksArray),
    Object.values(next),
  );

  const out = fn(a);
  return out;
};
