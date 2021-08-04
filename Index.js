const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = require("./server");

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
        message: "Main Menu. Please Select an Option",
        choices: [
          "Add Department",
          "Add Role",
          "Add Employee",
          "View Departments",
          "View Roles",
          "View Employees",
          "Update Roles",
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
        case "View Departments":
          displayDepartment();
          break;
        case "View Roles":
          displayRole();
        case "View Employees":
          displayEmployee();
        case "Update Roles":
          UpdateEmployee();
        default:
          return;
      }
    });
}

// Add departments, roles, employees

async function createDepartment() {
  const response = await inquirer
    .prompt([
      {
        type: "input",
        name: "dname",
        message: "Enter the department name (i.e. Sales, corporate etc.)",
      },
      // {
      //     type:"input",
      //     name: "dId",
      //     message: "Enter the desired department ID #"
      // },
    ])
    .then((data) => {
      console.log(data);
      connection.query("INSERT INTO department SET ?", {
        name: data.dname,
        //   id: data.dId
      });
      console.log("Department has been added, returning to main menu");
      init();
    });
}

async function createRole() {
  const response = await inquirer
    .prompt([
      {
        type: "input",
        name: "rname",
        message: "Enter the employee's title (i.e sales rep, manager, etc.)",
      },
      //   {
      //       type:"input",
      //       name: "dId",
      //       message: "Enter the desired ID # for this role (This id # is separate from the deparment and employee id number.)"
      //   },
      {
        type: "input",
        name: "salary",
        message:
          "Enter the salary amount for this employee (without $ or , characters)",
      },
      {
        type: "input",
        name: "rId",
        message: "Enter the desired ID # for this department",
      },
    ])
    .then((data) => {
      console.log(data);
      connection.query("INSERT INTO role SET ?", {
        title: data.rname,
        salary: data.salary,
        id: data.rId,
      });
      console.log("Role has been added, returning to main menu");
      init();
    });
}

async function createEmployee() {
  const response = await inquirer
    .prompt([
      {
        type: "input",
        name: "efname",
        message: "Enter the employee's first name)",
      },
      {
        type: "input",
        name: "elname",
        message: "Enter the employee's last name)",
      },
      {
        type: "input",
        name: "salary",
        message: "Enter the employee's role ID #",
      },
      {
        type: "input",
        name: "mId",
        message: "Enter the employee's manager ID #",
      },
    ])
    .then((data) => {
      console.log(data);
      connection.query("INSERT INTO employee SET ?", {
        first_name: data.efname,
        last_name: data.elname,
        role_id: data.rId,
        manager_id: data.mId,
      });
      console.log("Employee has been added, returning to main menu");
      init();
    });
}

// View departments, roles, employees

async function displayDepartment() {
    const response = await inquirer
      .prompt([
        {
          type: "input",
          name: "dname",
          message: "Enter the department name (i.e. Sales, corporate etc.)",
        },
        // {
        //     type:"input",
        //     name: "dId",
        //     message: "Enter the desired department ID #"
        // },
      ])
      .then((data) => {
        console.log(data);
        connection.query("INSERT INTO department SET ?", {
          name: data.dname,
          //   id: data.dId
        });
        console.log("Department has been added, returning to main menu");
        init();
      });
  }

init();
