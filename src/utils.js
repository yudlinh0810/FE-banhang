export const isJsonString = (data) => {
  try {
    JSON.parse(data);
  } catch (error) {
    return false;
  }
  return true;
};
export const getItem = (label, key, icon, children, type) => {
  return { key, icon, children, label, type };
};

export const getBase64 = (file) => {
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      return resolve(reader.result);
    };
    reader.onerror = (error) => {
      return reject(error);
    };
  });
};
