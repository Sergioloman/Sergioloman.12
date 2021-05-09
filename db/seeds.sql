INSERT INTO departments (name)
VALUES
('Engineering'),
('Accounting'),
('Sales'),
('Operations'),
('Human Resources');


INSERT INTO roles (title, salary, department_id)
VALUES
('Development Manager', 100000, 1), 
('Software Engineer', 80000, 1),
('Web Developer', 80000, 1),
('Finances Manager', 90000, 2),
('Accountant', 70000, 2),
('Grant Writer', 75000, 2),
('Sales Manager', 90000, 3),
('Sales Lead', 50000, 3),
('Communications coordinator', 55000, 3),
('Operations Manager', 75000, 4),
('Operations Coorrdinator', 40000, 4),
('Human Resources Manager', 70000, 5),
('Onboarding Coordinator', 40000, 5);


INSERT INTO employees (first_name,last_name,role_id,manager_id)
VALUES
('Mark','Grayson', 1, null),
('Peter','Parker', 2, 1),
('Marie','Curie', 4,null),
('Liliana','Vess', 3, 1),
('Chandra','Nalaar', 2, 1),
('Rebecca','Gway', 3, 1),
('Felicia','Day', 7,null),
('Olivia','Stone', 5, 4),
('Yamato','D. Kozuky', 6, 4),
('Marko','Vaughan', 2, 1),
('Alana','Staples', 8, 7),
('Robert','Kirkman', 9, 7),
('Stan','lee', 10, null),
('Steve','Ditko', 11, 10),
('Elspeth','Tyrell', 12, null),
('Nissa','Ravane', 13, 12);

