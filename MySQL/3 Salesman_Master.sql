-- create table Product_master
-- \sql
-- \connect root@localhost:3306

-- create database Development(dbname)
-- show databases;
-- use Development(dbname)

-- create table
create table SALESMAN_MASTER
(
    SALESMAN_NO varchar(6),
    SALESMANNAME varchar(20),
    ADDRESS1 varchar(30),
    ADDRESS2 varchar(30),
    CITY varchar(20),
    PINCODE int(8),
    STATE varchar(20),
    SALAMT int(8),
    TGTTOGET int(6),
    YTDSALES int(6),
    REMARKS varchar(60)
);

-- show table
desc SALESMAN_MASTER;

-- insert data in table
insert into SALESMAN_MASTER values ("S00001","Aman","A/14","Worli","Mumbai",400002,"Maharashtra",3000,100,50,"Good");
insert into SALESMAN_MASTER values ("S00002","Omkar","65","Nariman","Mumbai",400001,"Maharashtra",3000,200,100,"Good");
insert into SALESMAN_MASTER values ("S00003","Raj","P-7","Bandra","Mumbai",400032,"Maharashtra",3000,200,100,"Good");
insert into SALESMAN_MASTER values ("S00004","Ashish","A/5","Juhu","Mumbai",400044,"Maharashtra",3500,200,150,"Good");


-- view table data
select * from SALESMAN_MASTER;