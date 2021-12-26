#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  try {
    saveKeyValue("token", token);
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

  if (args["s"]) {
    //Сохранить город
  }

  if (args["h"]) {
    printHelp();
  }

  if (args["t"]) {
    saveToken(args["t"]);
  }

  //Вывод погоды
};

initCLI();
