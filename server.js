const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Update with your own MySQL password!
    password: "",
    database: "tracker_db",
    
});

  module.exports = connection; 