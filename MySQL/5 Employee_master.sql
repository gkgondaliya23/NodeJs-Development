-- create table Product_master
-- \sql
-- \connect root@localhost:3306

-- create database Development(dbname)
-- show databases;
-- use Development(dbname)

-- create table
create table EMPLOYEE_MASTER
(
    EMPLOYEE_NO varchar(6),
    FIRSTNAME varchar(20),
    LASTNAME varchar(20),
    PHONE int(10),
    EMAIL varchar(50),
    OFFICECODE varchar(10),
    REPORTSTO int(20),
    JOBTITLE varchar(20)
);

-- show table
desc EMPLOYEE_MASTER;


-- insert data in table
insert into EMPLOYEE_MASTER values ("E001", "Peter", "Kyle", 9649343, "Peter@gmail.com", "1", 1001, "President");
insert into EMPLOYEE_MASTER values ("E002", "Jonny", "Tailor", 2354132, "Jonny@gmail.com", "1", 1008, "vice president");
insert into EMPLOYEE_MASTER values ("E003", "Anthony", "Darji", 7658764, "Anthony@gmail.com", "1", 1031, "cleark");
insert into EMPLOYEE_MASTER values ("E004", "Rock", "Valand", 96493434, "Rock@gmail.com", "0", 1011, "manager");
insert into EMPLOYEE_MASTER values ("E005", "Mark", "Mochi", 9647653, "Mark@gmail.com", "1", 1101, "Quality department");
insert into EMPLOYEE_MASTER values ("E006", "Hussain", "Koli", 9642314, "Hussain@gmail.com", "0", 1041, "Sales department");


-- viwe data of table
select * from EMPLOYEE_MASTER;


------------------------------------------------------------------------------------------------------------------------------
--                                          Select Query
------------------------------------------------------------------------------------------------------------------------------
-- 1. set from specific column (jobtitle)
select JOBTITLE from EMPLOYEE_MASTER;
-- 2. All table view
select * from EMPLOYEE_MASTER;
-- 3. View for Specific Column (FristName, Phone, Email)
select FIRSTNAME,PHONE,EMAIL from EMPLOYEE_MASTER;
-- 4. View for Specific Column (OfficeCode is 0)
select * from EMPLOYEE_MASTER where OFFICECODE="0";
-- 5. View for Specific Column (Sales Amount is 3000)
select * from EMPLOYEE_MASTER where JOBTITLE="President";


---------------------------------------------------------------------------------------------------------------------------
--                                           Update Query
---------------------------------------------------------------------------------------------------------------------------
-- 1.
update EMPLOYEE_MASTER set JOBTITLE="Clerk" where EMPLOYEE_NO="E003";
-- 2.
update EMPLOYEE_MASTER set REPORTSTO=1000 where EMPLOYEE_NO="E006";
-- 3.
update EMPLOYEE_MASTER set OFFICECODE="0" where FIRSTNAME="Jonny";
