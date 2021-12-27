#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { isEmptyValue } from "./utils/utils.js";

const saveToken = async (token) => {
  if (isEmptyValue(token) === true || typeof token === "boolean") {
    return printError("No token specified!");
  }
  try {
    saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token was saved successfull");
  } catch (e) {
    printError(e.message);
  }
};

const initCLI = () => {
  console.log("Started");
  console.log(process.argv);

  const args = getArgs(process.argv);
  console.log(args);

  if (isEmptyValue(args["s"]) === false) {
    //Сохранить город
  }

  if (isEmptyValue(args["h"]) === false) {
    printHelp();
  }

  if (isEmptyValue(args["t"]) === false) {
    saveToken(args["t"]);
  }

  getWeather("moscow");

  //Вывод погоды
};

initCLI();
