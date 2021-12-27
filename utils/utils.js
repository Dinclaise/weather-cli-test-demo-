import _isObject from "lodash/fp/isObject.js";

const isEmptyValue = (value) =>
  ["", null, undefined, "{}"].includes(value) === true ||
  (Array.isArray(value) === true && value.length === 0) ||
  (_isObject(value) === true && Object.keys(value).length === 0);

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";
    case "02":
      return "🌤️";
    case "03":
      return "☁️";
    case "04":
      return "☁️";
    case "09":
      return "🌧️";
    case "10":
      return "🌦️";
    case "11":
      return "🌩️";
    case "13":
      return "❄️";
    case "50":
      return "🌫️";
  }
};

export { isEmptyValue, getIcon };
