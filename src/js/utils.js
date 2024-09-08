export const checkInputValue = (key) => {
  return key.length > 1 ? key.split(" ").join("") : key;
};

export const findCampersByFilter = (parameters) => {
  if (typeof parameters === "object") {
    const parArr = [];
    for (const key in parameters) {
      for (const parameter in parameters[key]) {
        if (!parameters[key][parameter]) {
          break;
        } else {
          parArr.push(
            `${
              parameter === parameter.toUpperCase()
                ? parameter
                : parameter.toLowerCase()
            }=${parameters[key][parameter]}`
          );
        }
      }
    }
    return parArr.join("&");
  } else {
    return;
  }
};
