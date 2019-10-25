export default (state) => (
  Object.keys(state).map(key => {
    if (typeof state[key] === 'string') return state[key].length <= 1;
    return state[key] === null;
  }).filter(key => key).length === 0
);