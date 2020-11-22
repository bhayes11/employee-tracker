DROP DATABASE IF EXISTS company_name_db;
CREATE DATABASE company_name_db;
USE company_name_db;

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
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

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 8), ("Jared", "Chan", 2, NULL), ("Ashley", "Rodriquez", 3, NULL), ("Kenny", "Dojaquez", 4, 9), ("Malia", "Brown", 5, NULL), ("Kevin", "Tupik", 6, NULL), ("Gary", "Forest", 7, NULL);

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1), ("Sales", 75000, 1), ("Lead Engineer", 175000, 2), ("Software Engineer", 125000, 2), ("Accountant", 105000, 3), ("Legal Team Lead", 275000, 4), ("Lawyer", 190000, 4);

INSERT INTO department (department_name)
VALUES ("Sales"), ("Engineering"), ("Accounting"), ("Legal");

SELECT * FROM employee;

SELECT * FROM roles;

SELECT * FROM department;