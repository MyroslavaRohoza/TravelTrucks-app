export const checkInputValue = (key) => {
  return key.length > 1 ? key.split(" ").join("") : key;
};

export const findCampersByFilter = (parameters) => {
  const parArr = ["?"];
  for (const key in parameters) {
    for (const parameter in parameters[key]) {
      parArr.push(`${parameter}=${parameters[key][parameter]}`);
    }
  }
 return parArr.join("&");
};
