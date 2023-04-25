const inquirer = require('inquirer')
const mysql = require('mysql2');


// inquirer
//     .createPromptModule([
//         {
//             type: 'list',
//             message: 'What would you like to do?',
//             name: 'options',
//             choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
//         }
//     ])


//12-11 lesson use dbquery nested in the switch
function generateResponce (data)  {
    switch (data.choices) {
        case 'view all departments':
            db.query('SELECT * FROM department', function (err, results) {
                if (err) {
                    throw err;
                }
                console.log(results);
            });
            break;
        case 'view all roles':
            db.query('SELECT * FROM role', function (err, results) {
                if (err) {
                    throw err;
                }
                console.log(results);
            });
            break;
        case 'view all employees':
            db.query('SELECT * FROM employee', function (err, results) {
                if (err) {
                    throw err;
                }
                console.log(results);
            });
            break;
        case 'add a department':
            inquirer
                .createPromptModule([
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
                .createPromptModule([
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
                .createPromptModule([
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
                .createPromptModule([
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