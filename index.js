const mysql = require("mysql");
const inquirer = require("inquirer");
const figlet = require("figlet");

const connection = mysql.createConnection({
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
    console.log("Connected");
  if (err) throw err;
  runSearch();
});
console.log("-------------------------------------------------------------------------------------------");
figlet("Employee Manager", function(err, data) {
    if (err) {
        console.log("Issue");
        console.dir(err);
        return;
    }
    console.log(data);
    console.log("-------------------------------------------------------------------------------------------");
});


function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "View employees by department",
          "View employees by role",
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
  
        case "View employees by department":
            employeesDept();
          break;
  
        case "View employees by role":
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
        let query = "SELECT * FROM employee "
        query += "JOIN roles ON employee.title_id = roles.Id "
        query += "JOIN department ON roles.department_id = department.Id; ";
        //console.log(query);
        connection.query(query, function(err, res) {
            console.table(res);
          runSearch();
        });
  }

  function employeesDept() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "Choose Department",
        choices: [
          "Sales",
          "Engineering",
          "Accounting",
          "Legal"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Sales":
            salesDept();
          break;
  
        case "Engineering":
            engineeringDept();
          break;
  
        case "Accounting":
            accountingDept();
          break;
  
        case "Legal":
            legalDept();
          break;
        }
      });
  }
    function salesDept() {
    // SELECT * FROM employee
    // JOIN roles ON employee.title_id = roles.Id 
    // JOIN department ON roles.department_id = department.Id
    // WHERE department.department_name = "sales";
        let query = "SELECT * FROM employee "
        query += "JOIN roles ON employee.title_id = roles.Id "
        query += "JOIN department ON roles.department_id = department.Id "
        query += "WHERE department.department_name = Sales";
        console.log(query);
        connection.query(query, function(err, res) {
            console.table(res);
        runSearch();
        });
    }
  
// SELECT * FROM employee
// JOIN roles ON employee.title_id = roles.Id 
// JOIN department ON roles.department_id = department.Id;
    //   .then(function(answer) {
    // var query = "SELECT position, song, year FROM top5000 WHERE ?";
