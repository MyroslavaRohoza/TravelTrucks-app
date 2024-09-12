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

export const capitalizeAndFormat = (str) => {
  if (!str) {
    return;
  }
  return (
    str.charAt(0).toUpperCase() +
    str.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2")
  );
};
