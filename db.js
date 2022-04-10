const mongoose = require("mongoose");

const connectionDB = (connectionStr) => {
  return mongoose.connect(connectionStr);
};

module.exports = connectionDB;
