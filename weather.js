#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import {
  printError,
  printHelp,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
import {
  saveKeyValue,
  TOKEN_DICTIONARY,
  getKeyValue,
} from "./services/storage.service.js";
import { isEmptyValue } from "./utils/utils.js";

import dotenv from "dotenv";
dotenv.config();

const saveToken = async (token) => {
  if (isEmptyValue(token) === true || typeof token === "boolean") {
    return printError("No token specified!");
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token was saved successfull");
  } catch (e) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  if (isEmptyValue(city) === true || typeof city === "boolean") {
    return printError("No city specified!");
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("City was saved successfully!");
  } catch (e) {
    printError(e.message);
  }
};

const getForcast = async (args) => {
  const city = await getKeyValue(TOKEN_DICTIONARY.city);

  try {
    const weather = await getWeather(city);
    printWeather(weather);
  } catch (error) {
    if (error?.response?.status === 404) {
      printError("Неверно указан город.");
    } else if (error?.response?.status === 401) {
      printError("Неверно указан токен.");
    } else {
      printError(error.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log("arahs", args);

  if (isEmptyValue(args["s"]) === false) {
    // Сохранить город
    return saveCity(args["s"]);
  }

  if (isEmptyValue(args["h"]) === false) {
    //Вывод помощи
    return printHelp();
  }

  if (isEmptyValue(args["t"]) === false) {
    // СОхранить токен
    return saveToken(args["t"]);
  }

  //Вывод погоды
  getForcast(args);
};

initCLI();
