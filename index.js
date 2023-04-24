const inquirer = require('inquirer')
const mysql = require('mysql2');

inquirer
.createPromptModule([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'options',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'and update an employee role']
    }
    
])



//12-11 lesson use dbquery nested in the switch

switch (data.choices){
    case 'view all departments':
        db.query('SELECT * FROM department', function (err, results) {
            if (err) {
              throw err;
            }
            console.log(results);
          });
        break;


}