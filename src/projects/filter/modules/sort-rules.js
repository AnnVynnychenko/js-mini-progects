export const sortByCondition = (data, condition) => {
  if (!condition || condition.length === 0) return data;
  const sortKey = condition[0];
  return [...data].sort((firstEmail, secondEmail) =>
    firstEmail[sortKey]
      .toLowerCase()
      .localeCompare(secondEmail[sortKey].toLowerCase())
  );
};
