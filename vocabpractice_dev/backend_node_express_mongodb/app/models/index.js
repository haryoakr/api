require('dotenv').config();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_ACCESS_URL;
db.vocabularies = require("./vocabularies.model.js")(mongoose);

module.exports = db;