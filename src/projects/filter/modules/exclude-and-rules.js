export const excludeAnd = (data, condition) => {
  if (!condition || condition.length === 0) return data;
  return data.filter(item => {
    const excludeData = condition.every(rule => {
      const conditionKeys = Object.keys(rule);
      return conditionKeys.every(key => rule[key] === item[key]);
    });
    return !excludeData;
  });
};
