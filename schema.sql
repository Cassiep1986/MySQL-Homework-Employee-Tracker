DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (65, 30) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY(id)
);

