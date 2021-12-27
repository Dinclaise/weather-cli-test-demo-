import axios from "axios";
import https from "https";
import { isEmptyValue } from "../utils/utils.js";
import { printError } from "./log.service.js";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);

  if (isEmptyValue(token) === true) {
    return printError("No token set, add it via the command -t [API_KEY]");
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    }
  );

  return data;
};

export { getWeather };
