//requirements
const fs = require("fs");
const inquirer = require("inquirer");
const db = require("./lib/query.js");
const figlet = require("figlet");


//insert ASCII art here:
figlet("Employee Tracker",{
    font: "Slant",
},function(err, data){
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
}); 

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
    });
}



function viewDepartments(){
    db.getAlldepts().then(
        ([rows])=>{
            let departments = rows;
            console.log("\n");//creates a new line
            console.table(departments);
        }
    ).then(()=>menu())
}
function viewRoles(){
    console.log('here are all the roles')
}
function viewEmployees(){
    console.log('here are all the employees')
}
function addDepartment(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            //remember to match this value with what is under schema
            message: 'Enter the name of the new Department'
        }
    ]).then(anwers=>{
        db.addDept(anwers.name)
        .then(
            console.log(`added ${answers.name} to the database`)
        )
        .then(()=>menu())
    })
}
function addRole(){
   console.log("hello")

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

menu();
