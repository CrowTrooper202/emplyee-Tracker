const express = require('express');

const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

e
const db = mysql.createConnection(
  {
    host: 'localhost',
    
    user: 'root',
    
    password: 'GundamTrooper202',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

// Query database
db.query('SELECT * FROM students', function (err, results) {
  if (err) {
    throw err;
  }
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
