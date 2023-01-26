-- Customers Table
-- \sql
-- \connect root@localhost:3306

--1. create database mydb(dbname)
-- show databases;
-- use mydb(dbname)

--2. create table
create table customers
(
    customer_id int  PRIMARY KEY AUTO_INCREMENT,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(100),
    Address varchar(255),
    city varchar(50),
    state varchar(50),
    zip varchar(50)   
);

-- show table
desc customers;

--3. insert data
insert into customers values (1,"John", "Doe", "johndoe@example.com", "123 Main St", "Torrento", "USA", "123546" );
insert into customers values (null,"Jane", "Doe", "janedoe@example.com", "456 Park Ave", "Torrento", "USA", "678901" );
insert into customers values (null,"Bob", "Smith", "bobsmith@example.com", "789 Elem Ave", "California", "USA", "125624" );

-- 4. all data from "customers" table  and display
select * from customers;


-- 5. update emil address of customer with customer_id = 1 to "johndoe@newexam.com"
update customers set email = "johndoe@newexam.com" where customer_id = 1;

-- 6. Delete the customer with customer_id = 2
delete from customers where customer_id = 2;

-- 7. Select all data from the "customers" table again and display the results to see the update and delete in action
select * from customers;