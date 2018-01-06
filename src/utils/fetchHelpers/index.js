const _fetch = (url, options = {}) => fetch(url, { ...options, mode: 'cors', });

const getAsync = (url, options = {}) => _fetch(url, { ...options, method: 'GET' });
const postAsync = (url, data, options = {}) => _fetch(url, { ...options, method: 'POST', body: data });
const putAsync = (url, data, options = {}) => _fetch(url, { ...options, method: 'PUT', body: data });
const patchAsync = (url, data, options = {}) => _fetch(url, { ...options, method: 'PATCH', body: data });
const deleteAsync = (url, data, options = {}) => _fetch(url, {
  ...options,
  method: 'DELETE',
  [data ? 'body' : null]: data,
});

export {
  getAsync,
  postAsync,
  putAsync,
  patchAsync,
  deleteAsync,
};
