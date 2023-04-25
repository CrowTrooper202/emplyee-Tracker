const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const generateResponce = require('./index')
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());



const db = mysql.createConnection(
    {
        host: 'localhost',

        user: 'root',

        password: 'GundamTrooper202',
        database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
);

function firstPrompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'options',
                choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
            }
        ])
        .then((data) => {
            generateResponce(data), (err) =>
                err ? console.log(err) : console.log('success!')
        })
}

firstPrompt()

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = firstPrompt