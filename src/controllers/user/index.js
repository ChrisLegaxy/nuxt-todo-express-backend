/* Controller Function Imports */
const create = require("./create");
const single = require("./single");
const deleteSingle = require("./deleteSingle")
const remove = require("./delete");
const update = require("./delete");
const list = require("./list");

const user = {
  create,
  single,
  remove,
  update,
  list
};

module.exports = user;
