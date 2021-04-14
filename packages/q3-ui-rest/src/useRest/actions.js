import React from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';
import { get, invoke } from 'lodash';
import {
  makePath,
  makeQueryPath,
  formatUrlPath,
} from '../helpers';
import reducer from './reducer';
import {
  FETCHING,
  FETCHED,
  CREATED,
  UPDATED,
  DELETED,
  DELETED_MANY,
} from './constants';

const useRest = ({
  url,
  poll,
  redirectOnSearch,
  key,
  pluralized,
  select,
  acknowledgeUpdateOps = false,
  runOnInit = false,
  decorators = {},
  location = {},
  history = {},
  headers = {},
}) => {
  if (!url) throw new Error('Requires a valid URL');
  const { search } = location;
  const [state, dispatch] = React.useReducer(reducer, {
    fetching: runOnInit,
    progress: 0,
  });

  const call = (type, data = {}, err = {}) =>
    dispatch({
      key,
      data,
      pluralized,
      err,
      type,
    });

  const handleRequest = (promise, actions, verb) =>
    promise
      .then(({ data }) => {
        invoke(decorators, 'get', data);

        const resolver = () =>
          new Promise((res) => {
            call(verb, data);
            res(data);
          });

        return poll ? poll().then(resolver) : resolver();
      })
      .catch((err) =>
        Promise.reject(get(err, 'response.data')),
      );

  const wrapUpdateFn = (id, verb) => (values, actions) => {
    invoke(decorators, verb, values);
    const path = makePath([url, id]);

    const invokeAxios = (dynamicPath) =>
      invoke(Axios, verb, dynamicPath, values);

    const makeService = () =>
      acknowledgeUpdateOps
        ? invokeAxios(`${path}?acknowledge=true`).then(
            () => ({
              data: values,
            }),
          )
        : invokeAxios(path);

    return handleRequest(makeService(), actions, UPDATED);
  };

  const invokeFetchingWithQueryString = (
    callWithLoading,
  ) => (query = '') => {
    if (callWithLoading) call(FETCHING);
    return Axios.get(formatUrlPath(url, query, select))
      .then(({ data }) => {
        invoke(decorators, 'get', data);
        call(FETCHED, data);
        return Promise.resolve(data);
      })
      .catch((err) => {
        call(FETCHED, null, err);
        return Promise.reject(err);
      });
  };

  const methods = {
    get: invokeFetchingWithQueryString(true),
    poll: invokeFetchingWithQueryString(false),

    remove(id) {
      return () =>
        Axios.delete(makePath([url, id]))
          .then(() => {
            call(DELETED, { id });
            return poll ? poll() : null;
          })
          .catch((err) => {
            return Promise.reject(err);
          });
    },

    removeBulk(ids = []) {
      return () =>
        Axios.delete(makeQueryPath(url, ids))
          .then(() => {
            call(DELETED_MANY, { ids });
            return poll ? poll() : null;
          })
          .catch((err) => {
            return err;
          });
    },

    patch(id) {
      const { name } = methods.patch;
      return wrapUpdateFn(id, name);
    },

    patchBulk(ids, done) {
      return (values, actions) => {
        invoke(decorators, 'patch', values);

        return handleRequest(
          invoke(
            Axios,
            'patch',
            makeQueryPath(url, ids),
            values,
          ),
          actions,
          UPDATED,
        ).then((r) => {
          if (done) done();
          return r;
        });
      };
    },

    put(id) {
      const { name } = methods.put;
      return wrapUpdateFn(id, name);
    },

    post(values, actions) {
      const { name } = methods.post;
      invoke(decorators, name, values);
      return handleRequest(
        Axios.post(url, values, { headers }),
        actions,
        CREATED,
      );
    },
  };

  React.useEffect(() => {
    Axios.interceptors.request.use(function (config) {
      if (config.data instanceof FormData)
        // eslint-disable-next-line
        config.headers['Content-Type'] =
          'multipart/form-data';

      return config;
    });

    const saved = null; // localStorage.getItem(url);
    if (
      !location.search &&
      saved &&
      saved !== 'null' &&
      saved !== 'undefined'
    ) {
      navigate(`?${saved}`);
    } else if (runOnInit && !redirectOnSearch) {
      methods.get(search);
    } else if (redirectOnSearch && search) {
      const { push } = history;
      push(`${redirectOnSearch}${search}`);
    }
  }, [search, url]);

  return { ...state, ...methods };
};

export default useRest;
