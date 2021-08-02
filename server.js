const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3000
    port: 3000,
  
    // Your username
    user: "root",
  
    // Be sure to update with your own MySQL password!
    password: "",
    database: "employees",
});

  module.exports = connection; 