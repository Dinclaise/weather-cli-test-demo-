#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";

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
    //Сохранить токен
  }

  //Вывод погоды
};

initCLI();
