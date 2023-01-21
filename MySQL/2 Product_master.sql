-- create table Product_master
-- \sql
-- \connect root@localhost:3306

-- create database Development(dbname)
-- show databases;
-- use Development(dbname)

-- create table
create table PRODUCT_MASTER
(
    PRODUCT_NO varchar(6),
    DESCRIPTION varchar(15),
    PROFITPERCENT int(4),
    UNITMEASURE varchar(10),
    QTYONHAND int(8),
    REORDERLVL int(8),
    SELLPRICE int(8),
    COSTPRICE int(8)
);

-- show table
desc PRODUCT_MASTER;

-- insert data in table
insert into PRODUCT_MASTER values ("P00001","T-Shirts",5,"Piece",200,50,350,250);
insert into PRODUCT_MASTER values ("P0345","Shirts",6,"Piece",150,50,500,350);
insert into PRODUCT_MASTER values ("P06734","Cotton Jeans",5,"Piece",100,20,600,450);
insert into PRODUCT_MASTER values ("P07865","Jeans",5,"Piece",100,20,750,500);
insert into PRODUCT_MASTER values ("P07868","Trousers",2,"Piece",150,50,850,550);
insert into PRODUCT_MASTER values ("P07885","Pull Overs",2.5,"Piece",80,30,700,450);
insert into PRODUCT_MASTER values ("P07965","Denim Shirts",4,"Piece",100,40,350,250);
insert into PRODUCT_MASTER values ("P07975","Lycra Tops",5,"Piece",70,30,300,175);
insert into PRODUCT_MASTER values ("P08865","Skirts",5,"Piece",75,30,450,300);

-- view table data
select * from PRODUCT_MASTER;