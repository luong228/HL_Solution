'use strict';
const mysql2 = require('mysql2');

const db = mysql2.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "123123123",
  database: process.env.DB_NAME || "jokeapp"
});
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
module.exports = db