export const checkInputValue = (key) => {
  return key.length > 1 ? key.split(" ").join("") : key;
};
