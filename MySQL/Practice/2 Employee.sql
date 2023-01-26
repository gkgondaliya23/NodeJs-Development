-- Employee Table
-- \sql
-- \connect root@localhost:3306

--1. create database employees(dbname)
-- show databases;
-- use employees(dbname)

--2. create table
create table employee
(
    ID int PRIMARY KEY AUTO_INCREMENT,
    NAME varchar(100),
    DEPARTMENT varchar(255),
    SALARY int(10)
);

-- show table
desc employee;

-- 3. insert data
insert into employee values (1,"Johe due", "Product", 25000);
insert into employee (Name,DEPARTMENT,SALARY) values ("Smith Odian", "Sales", 22000);
insert into employee (Name,DEPARTMENT,SALARY) values ("Mark Wood", "Product", 28500);
insert into employee (Name,DEPARTMENT,SALARY) values ("Johe Smith", "Admin", 55000);
insert into employee (Name,DEPARTMENT,SALARY) values ("R G Sharma", "Management", 205000);
insert into employee (Name,DEPARTMENT,SALARY) values ("Ravi Gupta", "Sales", 32000);
insert into employee (Name,DEPARTMENT,SALARY) values ("Jerom Tailor", "Product", 26000);
insert into employee  values (null,"V K Kohli", "Admin", 50000);

-- 4. all the data from the "employee" table
select * from employee;

-- 5. update the salary = 30000 of an employee with a id = 2.
update employee set SALARY = 30000 where ID = 2;

-- 6.  delete an employee with a id = 7
delete from employee where id = 7;

-- 7. all the data from the "employee" table
select * from employee;