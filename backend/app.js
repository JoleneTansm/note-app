const express = require('express');
const bodyparser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const note = require('./routes/note');

const DB_PATH = './notes.db' // sqlite3 file
const PORT = 3001;

let db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log(` App is connected to ${DB_PATH}`);
})
const app = express(); // instantiating an express server
app.use(cors()); // to handle requests coming from other origins, e.g. react dev server
app.use(bodyparser()); // to make available POST request body in req.body


// Add routes for / here
app.get('/all', (req, res) => {
  db.all('SELECT id FROM notes', (err, rows) => {
    const ids = rows.map((row) => row.id); // [{id: 1}, {id: 2}] => [1, 2]
    res.send(ids);
  })
})

app.use('/note', note);

app.listen(PORT, () => {
  console.log(`\n > App is listening at http://localhost:${PORT} ! \n`)
});
