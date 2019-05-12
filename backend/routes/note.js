const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router(); // mini-express app, use this

const DB_PATH = './notes.db' // sqlite3 file
let db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log(` Note is connected to ${DB_PATH}`);
})

// Add routes for /note here
router.post('/', (req, res) => {
  res.send("10"); // return placeholder id for now
})

router.get('/:id', (req, res) => {
  res.send('Hello world from note router');
});

module.exports = router
