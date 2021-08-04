const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = require("./server");

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
          displayDepartments();
          break;
        case "View Roles":
          displayRoles();
        case "View Employees":
          displayEmployees();
        case "Update Roles":
          UpdateRoles();
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
    ])
    .then((data) => {
      console.log(data);
      connection.query("INSERT INTO department SET ?", {
        name: data.dname,
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
        name: "title",
        message: "Enter an employee title (i.e sales rep, manager, etc.)",
      },
      {
        type: "input",
        name: "salary",
        message:
          "Enter the salary amount for this employee type (without $ or , characters)",
      },
      {
        type: "input",
        name: "dId",
        message: "Enter the desired department ID #",
      },
    ])
    .then((data) => {
      console.log(data);
      connection.query("INSERT INTO role SET ?", {
        title: data.title,
        salary: data.salary,
        id: data.dId,
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
        message: "Enter the employee's first name",
      },
      {
        type: "input",
        name: "elname",
        message: "Enter the employee's last name",
      },
      {
        type: "input",
        name: "rId",
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

function displayDepartments() {
    let query = `SELECT * FROM department`
    connection.query(query, function (err, data) {
      if (err) throw err;
      console.table(data);
       init();
    });
    
  }

  function displayRoles() {
    let query = `SELECT * FROM role`
    connection.query(query, function (err, data) {
      if (err) throw err;
      console.table(data);
       init();
    });
    
  }

  function displayEmployees() {
    let query = `SELECT * FROM employee`
    connection.query(query, function (err, data) {
      if (err) throw err;
      console.table(data);
       init();
    });
    
  }

  // Update employee roles

  async function UpdateRoles() {
    connection.query("SELECT * FROM role", (err, data) => {
        if(err) throw err;
        // console.log(data);
        const choices = data.map((role) => (role.title));
        console.log(choices);

        inquirer
        .prompt([
              {
                  type:"list",
                  name:"update",
                  message:"Select the title name that you would like to change",
                  choices: choices
              },
              {
                  type:"input",
                  name:"newRole",
                  message:"Enter the new title name"
              },
          ])
          .then((data) => {
            console.log(data.newRole);
            connection.query(`UPDATE role SET ? WHERE ?`, 
                [
                    {title: `${data.newRole}`}, 
                    {title: `${data.update}`}
                ], 
                (err, res) => {
                    if (err) throw err;
                    console.log("Role has been updated, returning to main menu.");
                init();
            }); 
          });
    });
  };
init();
