const create = require("./create");
const single = require("./single");
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
