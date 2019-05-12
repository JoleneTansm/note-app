const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = './notes.db' // sqlite3 file
let db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log(` Note is connected to ${DB_PATH}`);
})

// Add routes for /note here

module.exports = router
