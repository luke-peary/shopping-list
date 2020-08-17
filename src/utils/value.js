export const isObject = (variable) => {
  return (
    variable && typeof variable === "object" && variable.constructor === Object
  );
};

export const isUndefined = (variable) => {
  return typeof variable === typeof undefined;
};

export const isNull = (variable) => {
  return variable === null;
};
