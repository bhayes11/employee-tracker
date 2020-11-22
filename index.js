var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Hayes11@",
  database: "company_name_db"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "View all employees by department",
          "View all employees by role",
          "Add department",
          "Add role",
          "Add employee",
          "Update employee role"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View all employees":
            employeesAll();
          break;
  
        case "View all employees by department":
            employeesDept();
          break;
  
        case "View all employees by role":
            employeesRole();
          break;
  
        case "Add department":
            departmentAdd();
          break;
        
        case "Add role":
            roleAdd();
        break;
        
        case "Add employee":
            employeeAdd();
        break;
  
        case "Update employee role":
            employeeRole();
          break;
        }
      });
  }

  function employeesAll() {

    inquirer
      .prompt({
        name: "artist",
        type: "input",
        message: "What artist would you like to search for?"
      })
      .then(function(answer) {
        var query = "SELECT position, song, year FROM top5000 WHERE ?";
        connection.query(query, { artist: answer.artist }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
          }
          console.table(data);
          runSearch();
        });
      });
  }
  
