const cache = new Map();

// Store in cache with ttl for 5 minutes
const set = (key, value) => cache.set(key, { value, ttl: Date.now() + 300000 });
const find = key => cache.get(key);

const requests = () => next => action => {
  const { type, remote, method, body, ...others } = action;

  if (!method || method === 'GET') {
    const cached = find(remote);

    // If endpoint is in cache and still valid,
    // return success action with cache
    if (cached && cached.ttl > Date.now()) {
      next({
        type: `${type}_SUCCESS`,
        data: cached.value.data,
        cached: true,
        ...others,
      });

      // Return a promise, to be coherent with `request` answer.
      return new Promise(resolve => resolve(cached.value));
    }
  }

  if (remote) {
    return fetch(`${API_URL}${remote}`, {
      method: method || 'GET',
      body: JSON.stringify(action.body),
    })
      .then(res => res.json())
      .then(data => next({ type: `${type}_SUCCESS`, data, ...others }))
      .then(data => {
        if (!method || method === 'GET') {
          set(remote, data);
        }
        return data;
      })
      .catch(error => {
        next({ type: `${type}_FAILURE`, error });
        throw new Error(error);
      });
  }

  return next(action);
};

export default requests;
