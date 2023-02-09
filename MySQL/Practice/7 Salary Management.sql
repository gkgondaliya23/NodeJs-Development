-- Salary Management System
-- \sql
-- \connect root@localhost:3306

--1. create database salary(dbname)
-- show databases;
-- use salary(dbname)

--2. create table employees
create table employees
(
    employee_id int primary key,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(100),
    phone varchar(50),
    address varchar(255),
    department varchar(50),
    position varchar(50),
    hire_date Date,
    salary int
);

insert into employees VALUES (1, "Nikunj", "Dudhat", "sq.nikunj@gmail.com", "9638963707", "13, Laxman Nagar", "Educator", "UI/UX Designer", "2022-03-01", 35000);
insert into employees VALUES (2, "Vivek", "Kachhcadiya", "sq.vivek@gmail.com", "7984738819", "72, Shiv Shakti Soc", "Educator", "Web Designer", "2021-11-01", 50000);
insert into employees VALUES (3, "Girish", "Gondaliya", "sq.girish@gmail.com", "9016669990", "68, MatruShakti Soc", "Educator", "Web Developer", "2022-04-01", 35000);
insert into employees VALUES (4, "Mohil", "Thummar", "sq.mohil@gmail.com", "8140843697", "1002, Shiv Avenue-1", "Educator", "App Developer", "2021-06-01", 50000);
insert into employees VALUES (5, "Paresh", "Rajput", "sq.paresh@gmail.com", "9586765994", "172, Abhishek Heights", "Educator", "Full-stack Developer", "2020-07-01", 80000);
insert into employees VALUES (6, "Jatin", "Raiyani", "sq.jatin@gmail.com", "8469536345", "1004, Varjbhumi Secotr-2", "Admin", "Director", "2020-04-01", 100000);
insert into employees VALUES (7, "Nilesh", "Pethani", "sq.nilesh@gmail.com", "8128064295", "12, Shantiniketan Soc", "Admin", "Branch Manager", "2020-04-01", 90000);

-- create table payroll
create table payroll
(
    payroll_id int primary key,
    employee_id int, 
    payroll_date date,
    gross_salary int(10),
    deductions int(10),
    net_salary int(10),
    foreign key (employee_id) references employees(employee_id)
);

insert into payroll values (1, 1, "2023-02-06", 32000, 0, 32000);
insert into payroll values (2, 2, "2023-02-06", 42000, 3000, 45000);
insert into payroll values (3, 3, "2023-02-06", 31000, 1000, 32000);
insert into payroll values (4, 4, "2023-02-06", 45000, 0, 45000);
insert into payroll values (5, 5, "2023-02-06", 79000, 1000, 80000);
insert into payroll values (6, 6, "2023-02-06", 90000, 10000, 100000);
insert into payroll values (7, 7, "2023-02-06", 90000, 0, 90000);
insert into payroll values (8, 7, "2023-01-06", 50000, 0, 50000);


-- create table deduction
create table deduction
(
    deduction_id int primary key,
    payroll_id int, 
    deduction_name varchar(50),
    amount int(10),
    foreign key (payroll_id) references payroll(payroll_id)
);

insert into deduction values (1, 2, "Marraige leave", 3000);
insert into deduction values (2, 3, "Seak leave", 1000);
insert into deduction values (3, 5, "Seak leave", 1000);
insert into deduction values (4, 6, "Upad Return", 5000);
insert into deduction values (5, 6, "Marriage leave", 2000);
insert into deduction values (6, 6, "Personal Work", 2000);
insert into deduction values (7, 6, "Seak leave", 1000);

-- create table bonus
create table bonus
(
    bonus_id int primary key,
    payroll_id int,
    bonus_name varchar(50),
    amount int(10),
    foreign key (payroll_id) references payroll(payroll_id)

);

insert into bonus values (1, 1, "Best App Design", 2000);
insert into bonus values (2, 2, "Excellent work", 2000);
insert into bonus values (3, 3, "Excellent work", 2000);
insert into bonus values (4, 4, "Coding Perfomance", 1000);
insert into bonus values (5, 5, "Coding Perfomance", 2000);


-- retrieve all data form employees table
select * from employees;

-- retrieve all data form payroll table
select * from payroll;

-- retrieve all data form deduction table
select * from deduction;

-- retrieve all data form bonus table
select * from bonus;

-- Select all data from the "employees" table where the "department" is 'Educator' and display the results.
select * from employees where department = "Educator";

-- Select all data from the "payroll" table where the "payroll_date" is between '2023-01-01' and '2023-12-31' and display the results.
select * from payroll where payroll_date between '2023-01-01' and '2023-12-31';

-- Update the "salary" of the employee with employee_id = 1 to 50000
update employees set salary = 50000 where employee_id = 1;

-- Delete the payroll with specific payroll_id.
delete from payroll where payroll_id = 8;