export default (state) => (
  Object.keys(state).map(key => {
    if (typeof state[key] === 'string') return state[key].length <= 1;
    if (typeof state[key] === 'number') return state[key] <= 0;
    return state[key] === null;
  }).filter(key => key).length === 0
);