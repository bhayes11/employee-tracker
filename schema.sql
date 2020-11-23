DROP DATABASE IF EXISTS company_name_db;
CREATE DATABASE company_name_db;
USE company_name_db;

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  title_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE roles(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, title_id, manager_id)
VALUES ("John", "Doe", 1, Null), ("Jared", "Chan", 2, 1), ("Ashley", "Rodriquez", 3, NULL), ("Kenny", "Dojaquez", 6, NULL), ("Malia", "Brown", 5, NULL), ("Kevin", "Tupik", 4, 3), ("Gary", "Forest", 7, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1), ("Sales", 75000, 1), ("Lead Engineer", 175000, 2), ("Software Engineer", 125000, 2), ("Accountant", 105000, 3), ("Legal Team Lead", 275000, 4), ("Lawyer", 190000, 4);

INSERT INTO department (department_name)
VALUES ("Sales"), ("Engineering"), ("Accounting"), ("Legal");

SELECT * FROM employee;

SELECT * FROM roles;

SELECT * FROM department;

SELECT * FROM employee
JOIN roles ON employee.title_id = roles.Id 
JOIN department ON roles.department_id = department.Id
WHERE department.department_name = "sales";
-- line 46 for department, dynamically fed questionmark syntax
-- changed role_id to title_id