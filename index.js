const inquirer = require('inquirer')
const mysql = require('mysql2');




const db = mysql.createConnection(
    {
        host: 'localhost',

        user: 'root',

        password: 'GundamTrooper202',
        database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
);



function generateResponce (data)  {
    console.log(data);
    switch (data.options) {
        case 'view all departments':
            
            db.query('SELECT * FROM department', function (err, results) {
                if (err) {
                    console.log(err);
                }
                console.table(results);
            });
            break;
        case 'view all roles':
            db.query('SELECT * FROM role', function (err, results) {
                if (err) {
                    console.log(err);
                }
                console.log(results);
            });
            break;
        case 'view all employees':
            db.query('SELECT * FROM employee', function (err, results) {
                if (err) {
                    console.log(err);
                }
                console.log(results);
            });
            break;
        case 'add a department':
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'what department do you want to add?',
                        name: 'department',
                    }
                ])
                .then(db.query(`INSERT INTO department ('name') VALUES ('${data.department})`))
            break;
        case 'add a role':
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'what role do you want to add?',
                        name: 'role',
                    }
                ])
                .then(db.query(`INSERT INTO role ('name') VALUES ('${data.role})`))
            break;
        case 'add an employee':
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'what is their First name?',
                        name: 'firstName',
                    },
                    {
                        type: 'input',
                        message: 'what is their Last name?',
                        name: 'lastName',
                    },
                    {
                        type: 'list',
                        message: 'What is their role?',
                        name: 'role',
                        choices: ['sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account manager', 'Legal Team Lead', 'Lawyer', 'Shift supervisor', 'Security Guard',]
                    },
                    {
                        type: 'list',
                        message: 'who is their manager?',
                        name: 'manager',
                        choices: ['John smith', 'Myra Estrada', 'Muriel Bowman', 'Wally Sherman', 'Pat Gildon', 'None']
                    }
                ])
                .then(db.query(`INSERT INTO employee ('first_name', 'last_name', role_id, 'manager_id') VALUES ('${data.firstName}, ${data.lastName}, ${data.role}, ${data.manager} )`))
            break;
        case 'update an employee role':
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'what is their Last name?',
                        name: 'lastName',
                    },
                    {
                        type: 'choice',
                        message: "what is their updated role",
                        name: 'role',
                        choices: ['sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account manager', 'Legal Team Lead', 'Lawyer', 'Shift supervisor', 'Security Guard',]
                    }
                ])
                .then(db.query(`UPDATE employee SET role = '${data.role}' were id = ${data.lastName}`))

    }
}


module.exports = generateResponce