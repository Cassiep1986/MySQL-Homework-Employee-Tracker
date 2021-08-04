use tracker_db;

INSERT INTO
    department (name)

VALUES
    ('Pharmacy'),
    ('HR'),
    ('Corporate');

INSERT INTO
    role (title, salary, department_id)

VALUES
    ('Pharmacy Tech', 40000, 1),
    ('Pharmacy Lead', 45000, 1),
    ('Pharmacist', 120000, 1),
    ('Human Resources Manager', 80000, 2),
    ('CEO', 500000, 3),
    ('Administrative assistant', 60000, 3),
    ('Sales Representative', 100000, 3);

INSERT INTO
    employee (first_name, last_name, role_id)

VALUES
    ('Jessie', 'Pinkman', 1),
    ('Earl', 'Hickey', 2),
    ('Walter', 'White', 3),
    ('Rita', 'Castillo', 4),
    ('Harold', 'Lee', 5),
    ('Kumar', 'Patel', 6),
    ('Rick', 'Sanchez', 7),
    ('Morty', 'Smith', 1);

SELECT
    *
FROM
    department;

SELECT
    *
FROM
    role;

SELECT
    *
FROM
    employee;