const requests = () => next => action => {
  const { type, remote, method, body, ...others } = action;

  if (remote) {
    return fetch(`${API_URL}${remote}`, {
      method: method || 'GET',
      body: JSON.stringify(action.body),
    })
      .then(res => res.json())
      .then(data => next({ type: `${type}_SUCCESS`, data, ...others }))
      .catch(error => {
        next({ type: `${type}_FAILURE`, error });
        throw new Error(error);
      });
  }

  return next(action);
};

export default requests;
