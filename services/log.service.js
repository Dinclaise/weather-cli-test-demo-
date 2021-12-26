import chalk from "chalk";
import dedent from "dedent-js";

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

export { printError, printSuccess, printHelp };
