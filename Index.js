const questions = require("inquirer");
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
  await questions
    .prompt([
      {
        type: "list",
        name: "main",
        message: "Please Select an Option",
        choices: ["Add", "View", "Update", "Exit"],
      },
    ])

    .then((data) => {
      // console.log(data);

      switch (data.main) {
        case "Add":
          create();
          break;
        case "View":
          display();
          break;
        case "Update":
          Update();
        default:
          return;
      }
    });
}

// Add departments, roles, employees
async function create() {
  await questions
    .prompt([
      {
        type: "list",
        name: "main",
        message: "Please Select an Option",
        choices: ["Add department", "Add role", "Add employee", "Exit"],
      },
    ])

    .then((data) => {
      // console.log(data);

      switch (data.main) {
        case "Add department":
          createDepartment();
          break;
        case "Add role":
          displayDepartment();
          break;
        case "Add employee":
          UpdateDepartment();
        default:
          return;
      }
    });
}

function createDepartment() {
    id = 0 
}

init();
