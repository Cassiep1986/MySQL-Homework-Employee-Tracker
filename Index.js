const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = require("./server");

// View departments, roles, employees

// Update employee roles

// Hints
// You may wish to include a seed.sql file to pre-populate your database. This will make development of individual features much easier.

// Focus on getting the basic functionality completed before working on more advanced features.

// Review the week's activities for a refresher on MySQL.

// Check out SQL Bolt for some extra MySQL help.

async function init() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "main",
        message: "Please Select an Option",
        choices: [
          "Add Department",
          "View Department",
          "Add Role",
          "View Role",
          "Add Employee",
          "View Employee",
          "Update Employee",
          "Exit",
        ],
      },
    ])

    .then((data) => {
      // console.log(data);

      switch (data.main) {
        case "Add Department":
          createDepartment();
          break;
        case "Add Role":
          createRole();
          break;
        case "Add Employee":
          createEmployee();
          break;
        case "View Department":
          displayDepartment();
          break;
        case "View Role":
          displayRole();
        case "View Employee":
          displayEmployee();
        case "Update Employee":
          UpdateEmployee();
        default:
          return;
      }
    });
}

// Add departments, roles, employees

async function createDepartment() {

  const response = await inquirer.prompt([
    { 
        type:"input",
        name: "dname", 
        message: "Add your department name" },
  ]).then((data) => {
      console.log(data)
  })};

//   connection.query(`INSERT INTO department SET ?;`, response);
//   console.table(allDept);
//   mainMenu();
// }

init();
