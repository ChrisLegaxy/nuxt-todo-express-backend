const chalk = require("chalk");

const primary = chalk.bold.blueBright;
const danger = chalk.bold.redBright;
const warning = chalk.bold.yellowBright;
const success = chalk.bold.greenBright;
const info = chalk.bold.cyanBright;
const def = chalk.bold.gray;

module.exports = {
  primary,
  danger,
  warning,
  success,
  info,
  def
};
