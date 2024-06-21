export const isJsonString = (data) => {
  try {
    JSON.parse(data);
  } catch (error) {
    return false;
  }
  return true;
};
export const getItem = (label, key, icon, children, type) => {
  return { label, key, icon, children, type };
};
