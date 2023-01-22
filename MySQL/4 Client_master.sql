-- create table Product_master
-- \sql
-- \connect root@localhost:3306

-- create database Development(dbname)
-- show databases;
-- use Development(dbname)

-- create table
create table CLIENT_MASTER
(
    CLIENT_NO varchar(6),
    NAME varchar(20),
    ADDRESS1 varchar(30),
    ADDRESS2 varchar(30),
    CITY varchar(15),
    PINCODE int(8),
    STATE varchar(15),
    BALDUE int(10)
);

-- show table
desc CLIENT_MASTER;

-- insert data in table
insert into CLIENT_MASTER values ("C00001","IVAN bayros","A-234 borivali","A-219 borivali","mumbai",400054,"maharastra",15000);
insert into CLIENT_MASTER values ("C00002","mamta majmudar","A-234 borivali","A-219 borivali","madrash",780001,"tamilnadu",0);
insert into CLIENT_MASTER values ("C00003","chhaya bankar","A-234 borivali","A-219 borivali","mumbai",400057,"maharastra",5000);
insert into CLIENT_MASTER values ("C00004","asvini joshi","A-234 borivali","A-219 borivali","bangalore",560001,"karnataka",0);
insert into CLIENT_MASTER values ("C00005","hansal colaco","A-234 borivali","A-219 borivali","mumbai",400060,"maharastra",2000);
insert into CLIENT_MASTER values ("C00006","dipak sharma","A-234 borivali","A-219 borivali","mangalor",560050,"karnataka",0);

-- view table data
select * from CLIENT_MASTER;

------------------------------------------------------------------------------------------------------------------------------
--                                          Select Query
------------------------------------------------------------------------------------------------------------------------------
-- 1. set from specific column (Name)
select NAME from CLIENT_MASTER;
-- 2. All table view
select * from CLIENT_MASTER;
-- 3. View for Specific Column (Name, State, City)
select NAME,STATE,CITY from CLIENT_MASTER;
-- 4. View for Specific Column (Description)
select DESCRIPTION from PRODUCT_MASTER;
-- 5. View for Specific Column (City is Mumbai)
select * from CLIENT_MASTER where CITY="mumbai";
-- 6. View for Specific Column (Sales Amount is 3000)
select * from SALESMAN_MASTER where SALAMT=3000;


---------------------------------------------------------------------------------------------------------------------------
--                                           Update Query
---------------------------------------------------------------------------------------------------------------------------
-- 1.
update CLIENT_MASTER set CITY="banglore" where CLIENT_NO="C00005";
-- 2.
update CLIENT_MASTER set BALDUE=1000 where CLIENT_NO="C00001";
-- 3.
update PRODUCT_MASTER set COSTPRICE=950 where DESCRIPTION="trousers";
-- 4.
update SALESMAN_MASTER set CITY="pune";