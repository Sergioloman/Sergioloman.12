//requirements
const fs = require("fs");
const inquirer = require("inquirer");
const db = require("./lib/query.js");
const figlet = require("figlet");

// ASCII text art:
// figlet("Employee Tracker",{
//     font: "Slant",
// },function(err, data){
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// }); 

// inquirer prompts
function menu() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "menu",
                message: "Would would you like to do?",
                choices: [
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    "Add a department",
                    "Add a role",
                    "Add employee",
                    "Update employee role",
                ],
            },
        ])
        .then((menuAnswers) => {
            console.log(menuAnswers);
            switch (menuAnswers.menu) {
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
                default: done()
            }
        });
}

function viewDepartments() {
    db.getAllDepts().then(
        ([rows]) => {
            let departments = rows;
            console.log("\n");//creates a new line
            console.table(departments);
        }
    ).then(() => menu())
}
function viewRoles() {
    db.getAllRoles().then(
        ([rows])=>{
            let roles = rows;
            console.log("\n");
            console.table(roles);
        }
    ).then(() => menu())
}
function viewEmployees() {
    db.getAllEmployees().then(
        ([rows])=>{
            let employees = rows;
            console.log("\n");
            console.table(employees);
        }
    ).then(() => menu())
}
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name', //remember to match this value with what is under schema
            message: 'Enter the name of the new Department'
        }
    ]).then(answers => {
        db.addDept(answers.name)
            .then(//res => {console.log(res)}
                console.log(`added ${answers.name} to the database`)
            )
            
    }).then(() => menu())
}
function addRole() {
    inquirer.prompt([
        {
            type:'input',
            name:'title',
            message: 'Enter the new Role'
        },
        {
            type:'input',
            name:'salary',
            message: 'Enter the salary for this Role'
        },
        {
            type:'input',
            name:'department_id',
            message: 'What department does this role fit into?'
        }
    ]).then(answers =>{
        db.addRole([answers.title, answers.salary, answers.department_id])
            .then(//
                console.log(`added ${[answers.title, answers.salary, answers.department_id]} to the database`)
            )
            
    }).then(() => menu())
}
function addEmployee() {
    inquirer.prompt([
        {
            type:'input',
            name:'first_name',
            message: 'Enter the name of the new Employee'
        },
        {
            type:'input',
            name:'last_name',
            message: 'Enter their last name'
        },
        {
            type:'input',
            name:'title',
            message: 'Enter their role'
        },
        {
            type:'input',
            name:'manager_id',
            message: 'who is their manager?'
        }
        
    ]),then(answers =>{
        db.addRole(answers.first_name)
            .then(
                console.log(`added ${answers.first_name} to the database`)
            )
            
    }).then(() => menu())
}

// how can we set inquirer to accomodate for relationships?
function updateEmployeeRole() {
    inquirer.prompt([
        {
        //select employee
        },
        {
        //select role
        }

    ]).then(answers=>{
        //update database
        console.log("update database with:", answers)
    }).then(() => menu())
    
}
function done() {
    console.log('Done!')
}

menu();
