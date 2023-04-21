const inquirer = require('inquirer')

inquirer
.createPromptModule([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'options',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'and update an employee role']
    }
    
])