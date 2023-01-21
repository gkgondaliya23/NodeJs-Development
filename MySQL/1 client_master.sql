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