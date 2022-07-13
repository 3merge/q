import {
  isString,
  last,
  size,
  get,
  map,
  replace,
} from 'lodash';

export const IMAGE_EXT_LIST = [
  'JPEG',
  'JPG',
  'PNG',
  'GIF',
  'TIFF',
  'SVG',
];

export const fetchUrlAsBlob = async (uri) => {
  const response = await fetch(uri);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener('load', () =>
      resolve(reader.result),
    );

    reader.addEventListener('error', (e) => reject(e));
    reader.readAsDataURL(blob);
  });
};

export const getFileType = (url) => {
  if (!url || !isString(url)) return null;

  const u = new URL(url);
  u.hash = '';
  u.search = '';

  const str = last(u.toString().split('.'));
  return isString(str) && size(str) && str !== 'undefined'
    ? str.toUpperCase()
    : null;
};

const convertSlashIntoDotNotation = (str) =>
  replace(str, /\//g, '.');

export const makePrivateKey = (str = undefined) =>
  isString(str)
    ? `__${last(str.split('/'))}__`
    : '__null__';

export const makeDirectoryId = (path = '', xs = {}) =>
  map(
    get(
      xs,
      [
        convertSlashIntoDotNotation(path),
        makePrivateKey(path),
      ].join('.'),
      [],
    ),
    'id',
  )
    .sort()
    .join(',');

export const toMbs = (bytes = 0) =>
  `${Number(bytes / 1024 ** 2).toFixed(2)}mbs`;

export const sanitize = (s) => {
  if (!isString(s)) return undefined;
  const punctuationless = s.replace(
    /[.,/#!$%^&*;:{}=\-_`~()]/g,
    '',
  );

  return punctuationless.replace(/\s{2,}/g, ' ');
};
