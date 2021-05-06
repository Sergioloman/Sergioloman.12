//requirements
const fs = require("fs")
const inquirer = require("inquirer")

//Command line prompts

function menu(){
    inquirer.prompt(
        [
            {
                
                type: 'list',
                name: 'menu',
                message: 'Would would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add employee',
                    'Update employee role',
                ]
            },
            
        ]
    ).then((menuAnswers)=>{
        switch (menuAnswers.menu){
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add employee':
                addEmployee();
                break;
            case 'Update employee role':
                updateEmployeeRole()
                break;
            default: renderTable()
        }
    })
}
function viewDepartments(){
    console.log('here are all the departments');
}
function viewRoles(){
    console.log('here are all the roles')
}
function viewEmployees(){
    console.log('here are all the employees')
}
function addDepartment(){
    console.log('adding a new department')
}
function addRole(){
    console.log('adding role')
}
function addEmployee(){
    console.log('adding employee')
}
function updateEmployeeRole(){
    console.log('this is a tricky one')
}
function renderTable(){
    console.log('table')
}
menu()


