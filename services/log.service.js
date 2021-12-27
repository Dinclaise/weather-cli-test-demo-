import chalk from "chalk";
import dedent from "dedent-js";
import { getIcon } from "../utils/utils.js";

const printError = (error) => {
  console.log(dedent`${chalk.bgRed(" ERROR ")} ${error}`);
};

const printSuccess = (message) => {
  console.log(dedent`${chalk.bgGreen(chalk.black(" SUCCESS "))} ${message}`);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(chalk.black(" HELP "))}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена
        `
  );
};

const printWeather = (data) => {
  console.log("ss", data);
  console.log(
    dedent`${chalk.bgMagenta(chalk.black(" INFO "))}
        Погода в городе ${data.name}:
        ${getIcon(data.weather[0].icon)}  ${data.weather[0].description}
        Температура: ${data.main.temp} ℃ (ощущается, как: ${
      data.main.feels_like
    } ℃ )
        Давление: ${data.main.pressure} мм
        Влажность: ${data.main.humidity} %
        `
  );
};

export { printError, printSuccess, printHelp, printWeather };
