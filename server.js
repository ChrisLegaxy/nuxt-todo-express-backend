/* Node Package Imports */

/* Imports */
const app = require("./app");
const config = require("./src/config/config");
const database = require("./src/config/database");
const chalk = require('./src/plugins/chalk')

/* Starting Up Server */
app.listen(config.app.PORT, async () => {
  try {
    database.connect().catch(err => {
      console.log(err);
      database.onError(err);
    });

    await database.onConnected();

    console.log(chalk.success(`Server is running on PORT ${config.app.PORT}`));
  } catch (err) {
    console.log(chalk.danger("Database Connection Failed"));
  }
});
