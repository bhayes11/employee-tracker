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


SELECT first_name last_name FROM employee
JOIN roles ON employee.title_id = roles.Id 
JOIN department ON roles.department_id = department.Id;

SELECT * FROM employee
JOIN roles ON employee.title_id = roles.Id 
JOIN department ON roles.department_id = department.Id;

SELECT * FROM employee
JOIN roles ON employee.title_id = roles.Id 
JOIN department ON roles.department_id = department.Id
WHERE department.department_name = 'Sales';

SELECT employee.id, employee.first_name, employee.last_name, roles.title, 
department.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) 
AS manager FROM employee LEFT JOIN role on employee.title_id = roles.id LEFT JOIN department on roles.department_id = department.id 
LEFT JOIN employee manager on manager.id = employee.manager_id;

-- line 46 for department, dynamically fed questionmark syntax
-- changed role_id to title_id




-- INSERT INTO authors (firstName, lastName) values ('Mark', 'Twain');
-- INSERT INTO authors (firstName, lastName) values ('Lewis', 'Carroll');
-- INSERT INTO authors (firstName, lastName) values ('Andre', 'Asselin');

-- INSERT INTO books (title, authorId) values ('Pride and Prejudice', 1);
-- INSERT INTO books (title, authorId) values ('Emma', 1);
-- INSERT INTO books (title, authorId) values ('The Adventures of Tom Sawyer', 2);
-- INSERT INTO books (title, authorId) values ('Adventures of Huckleberry Finn', 2);
-- INSERT INTO books (title, authorId) values ('Alice''s Adventures in Wonderland', 3);
-- INSERT INTO books (title, authorId) values ('Dracula', null);

-- SELECT * FROM authors;
-- SELECT * FROM books;

-- SELECT * FROM authors
-- JOIN books ON authors.id = books.authorId;
-- -- show ALL books with authors
-- -- INNER JOIN will only return all matching values from both tables
-- SELECT title, firstName, lastName
-- FROM books
-- INNER JOIN authors ON books.authorId = authors.id;

-- -- show ALL books, even if we don't know the author
-- -- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
-- SELECT title, firstName, lastName
-- FROM books
-- LEFT JOIN authors ON books.authorId = authors.id;

-- -- show ALL books, even if we don't know the author
-- -- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
-- SELECT title, firstName, lastName
-- FROM books
-- RIGHT JOIN authors ON books.authorId = authors.id;