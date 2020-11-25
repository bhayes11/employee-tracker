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
        let query = "SELECT * FROM employee "
        query += "JOIN roles ON employee.title_id = roles.Id "
        query += "JOIN department ON roles.department_id = department.Id "
        query += "WHERE department.department_name = 'Sales' ";
        //console.log(query);
        connection.query(query, function(err, res) {
            console.table(res);
        runSearch();
        });
    }
  
    function engineeringDept() {
      let query = "SELECT * FROM employee "
      query += "JOIN roles ON employee.title_id = roles.Id "
      query += "JOIN department ON roles.department_id = department.Id "
      query += "WHERE department.department_name = 'Engineering' ";
      //console.log(query);
      connection.query(query, function(err, res) {
          console.table(res);
      runSearch();
      });
    }

  function accountingDept() {
    let query = "SELECT * FROM employee "
    query += "JOIN roles ON employee.title_id = roles.Id "
    query += "JOIN department ON roles.department_id = department.Id "
    query += "WHERE department.department_name = 'Accounting' ";
    //console.log(query);
    connection.query(query, function(err, res) {
        console.table(res);
    runSearch();
    });
  }

  function legalDept() {
    let query = "SELECT * FROM employee "
    query += "JOIN roles ON employee.title_id = roles.Id "
    query += "JOIN department ON roles.department_id = department.Id "
    query += "WHERE department.department_name = 'Legal' ";
    //console.log(query);
    connection.query(query, function(err, res) {
        console.table(res);
    runSearch();
    });
  }

  function employeesRole() {
    let query = "SELECT * FROM employee "
    query += "JOIN roles ON employee.title_id = roles.Id ";
    //console.log(query);
    connection.query(query, function(err, res) {
        console.table(res);
      runSearch();
    });
  }
  
  // function employeesDept() {
  //   let query = "SELECT * FROM employee "
  //   query += "JOIN roles ON employee.title_id = roles.Id ";
  //   //console.log(query);
  //   connection.query(query, function(err, res) {
  //       console.table(res);
  //     runSearch();
  //   });
  // }
  
// SELECT * FROM employee
// JOIN roles ON employee.title_id = roles.Id 
// JOIN department ON roles.department_id = department.Id;
    //   .then(function(answer) {
    // var query = "SELECT position, song, year FROM top5000 WHERE ?";

//     class DB {
//       // Keeping a reference to the connection on the class in case we need it later
//       constructor(connection) {
//         this.connection = connection;
//       }
    
//       // Find all employees, join with roles and departments to display their roles, salaries, departments, and managers
//       findAllEmployees() {
//         return this.connection.query(
//           "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
//         );
//       }
    
//       // Find all employees except the given employee id
//       findAllPossibleManagers(employeeId) {
//         return this.connection.query(
//           "SELECT id, first_name, last_name FROM employee WHERE id != ?",
//           employeeId
//         );
//       }
    
//       // Create a new employee
//       createEmployee(employee) {
//         return this.connection.query("INSERT INTO employee SET ?", employee);
//       }
    
//       // Remove an employee with the given id
//       removeEmployee(employeeId) {
//         return this.connection.query(
//           "DELETE FROM employee WHERE id = ?",
//           employeeId
//         );
//       }
    
//       // Update the given employee's role
//       updateEmployeeRole(employeeId, roleId) {
//             //   logic
//       }
    
//       // Update the given employee's manager
//       updateEmployeeManager(employeeId, managerId) {
//       //  logic
//       }
    
//       // Find all roles, join with departments to display the department name
//       findAllRoles() {
//           // logic here
//       }
    
//       // Create a new role
//       createRole(role) {
//       //  logic here
//       }
    
//       // Remove a role from the db
//       removeRole(roleId) {
//        // logic here
//       }
    
//       // Find all departments, join with employees and roles and sum up utilized department budget
//       findAllDepartments() {
//       //  logic here
//       }
    
//       // Create a new department
//       createDepartment(department) {
//       //  logic here
//       }
    
//       // Remove a department
//       removeDepartment(departmentId) {
//       //  logic here
//       }
    
//       // Find all employees in a given department, join with roles to display role titles
//       findAllEmployeesByDepartment(departmentId) {
//       //   logic here
//       }
    
//       // Find all employees by manager, join with departments and roles to display titles and department names
//       findAllEmployeesByManager(managerId) {
//       //   logic here
       
//       }
//     }

//     / Remove an employee with the given id
//   removeEmployee(employeeId) {
//     return this.connection.query(
//       "DELETE FROM employee WHERE id = ?",
//       employeeId
//     );
//   }

//   / Remove an employee with the given id
//   removeEmployee(employeeId) {
//     return this.connection.query(
//       "DELETE FROM employee WHERE id = ?",
//       employeeId
//     );
//   }

//   server.js
// db
// - -  connection.js, only hold const (allows you to connect to database) const util = require("util");
// const mysql = require("mysql"); security purposes limited syntax
// - - index.js-long piece of code -queries
// - - schema.sql
// - - seed.sql--data insert into

