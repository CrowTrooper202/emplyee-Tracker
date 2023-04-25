INSERT INTO department (name)
VALUES
('Sales'),
('Engineering'),
('Security'),
('Legal'),
('Finance');

INSERT INTO role (title, salary, department_id)
VALUES
('sales Lead', 27000, 1),
('Salesperson', 20000, 1),
('Lead Engineer', 146000, 2),
('Software Engineer',125000, 2),
('Account manager', 60000, 5),
('Legal Team Lead', 155000, 4),
('Lawyer', 134000, 4),
('Shift supervisor', 60000, 3),
('Security Guard', 50000, 3);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'smith',1 , NULL),
('Russel', 'Bell', 2, 1),
('Myra', 'Estrada', 3, NULL),
('Wilfrid', 'Hutchinson',4, 3),
('Muriel', 'Bowman', 5, NULL),
('Wally', 'Sherman', 6, NULL),
('Oliver', 'Heath', 7, 6),
('Pat', 'Gildon', 8, NULL),
('Jane', 'Doe', 9, 8);

