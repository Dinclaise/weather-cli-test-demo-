import _isObject from "lodash/fp/isObject.js";

const isEmptyValue = (value) =>
  ["", null, undefined, "{}"].includes(value) === true ||
  (Array.isArray(value) === true && value.length === 0) ||
  (_isObject(value) === true && Object.keys(value).length === 0);

export { isEmptyValue };
