export const Conditional = ({ checkRender, children }) => {
  return !!checkRender && children;
};

export const groupBy = (data, key) =>
  data.reduce((acc, curr) => {
    if (!acc[curr[key]]) acc[curr[key]] = [];
    acc[curr[key]].push(curr);
    return acc;
  }, {});
