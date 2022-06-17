const mongoose = require("mongoose");
const DB = process.env.DATABASE;
const connect = mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = connect
