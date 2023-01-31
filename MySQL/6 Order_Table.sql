-- create table Product_master
-- \sql
-- \connect root@localhost:3306

-- create database E_commerse(dbname)
-- show databases;
-- use E_commerse(dbname)

-- create table client-master
create table CLIENT_MASTER
(
    CLIENT_NO varchar(6) primary key,
    NAME varchar(20),
    ADDRESS1 varchar(30),
    ADDRESS2 varchar(30),
    CITY varchar(15),
    PINCODE int(8),
    STATE varchar(15),
    BALDUE int(10)
);

-- create table product-master
create table PRODUCT_MASTER
(
    PRODUCT_NO varchar(6) primary key,
    DESCRIPTION varchar(15),
    PROFITPERCENT int(4),
    UNITMEASURE varchar(10),
    QTYONHAND int(8),
    REORDERLVL int(8),
    SELLPRICE int(8),
    COSTPRICE int(8)
);

-- create table salesman-master
create table SALESMAN_MASTER
(
    SALESMAN_NO varchar(6) primary key,
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

-- create table sales-order
create table SALES_ORDER
(
    ORDER_NO varchar(6) primary key,
    CLIENT_NO varchar(6),
    ORDER_Date varchar(20),
    SALESMAN_NO varchar(6),
    DELYTYPE varchar(5),
    BILLYN varchar(5),
    DELYDATE varchar(25),
    ORDER_Status varchar(30),
    constraint cl_no foreign key (CLIENT_NO) references CLIENT_MASTER(CLIENT_NO),
    constraint sl_no foreign key (SALESMAN_NO) references SALESMAN_MASTER(SALESMAN_NO)
);


-- create table sales-order-detail
create table SALES_ORDER_DETAILS
(
    ORDER_NO varchar(6),
    PRODUCT_NO varchar(6),
    QTYORDERED int(8),
    QTYDISP int(8),
    PRODUCTCREATE int (10),
    foreign key (ORDER_NO) references SALES_ORDER(ORDER_NO),
    foreign key (PRODUCT_NO) references PRODUCT_MASTER(PRODUCT_NO)
);


-- show table
desc CLIENT_MASTER;
desc PRODUCT_MASTER;
desc SALESMAN_MASTER;

-- insert data in client table
insert into CLIENT_MASTER values ("C00001","IVAN bayros","A-234 Borivali","A-219 borivali","mumbai",400054,"maharastra",15000);
insert into CLIENT_MASTER values ("C00002","mamta majmudar","B-419 Dahisar","B-419 Dahisar","madrash",780001,"tamilnadu",0);
insert into CLIENT_MASTER values ("C00003","chhaya bankar","E-35 Varli","E-35 Varli","mumbai",400057,"maharastra",5000);
insert into CLIENT_MASTER values ("C00004","asvini joshi","A-405 Borivali","A-405 Borivali","bangalore",560001,"karnataka",0);
insert into CLIENT_MASTER values ("C00005","hansal colaco","T-219 Bandra","T-219 Bandra","mumbai",400060,"maharastra",2000);
insert into CLIENT_MASTER values ("C00006","dipak sharma","A-139 Citilight","A-139 Citilight","mangalor",560050,"karnataka",0);

--  insert data in product table
insert into PRODUCT_MASTER values ("P00001","T-Shirts",5,"Piece",200,50,350,250);
insert into PRODUCT_MASTER values ("P0345","Shirts",6,"Piece",150,50,500,350);
insert into PRODUCT_MASTER values ("P06734","Cotton Jeans",5,"Piece",100,20,600,450);
insert into PRODUCT_MASTER values ("P07865","Jeans",5,"Piece",100,20,750,500);
insert into PRODUCT_MASTER values ("P07868","Trousers",2,"Piece",150,50,850,550);
insert into PRODUCT_MASTER values ("P07885","Pull Overs",2.5,"Piece",80,30,700,450);
insert into PRODUCT_MASTER values ("P07965","Denim Shirts",4,"Piece",100,40,350,250);
insert into PRODUCT_MASTER values ("P07975","Lycra Tops",5,"Piece",70,30,300,175);
insert into PRODUCT_MASTER values ("P08865","Skirts",5,"Piece",75,30,450,300);

-- insert data in salesman table
insert into SALESMAN_MASTER values ("S00001","Aman","A/14","Worli","Mumbai",400002,"Maharashtra",3000,100,50,"Good");
insert into SALESMAN_MASTER values ("S00002","Omkar","65","Nariman","Mumbai",400001,"Maharashtra",3000,200,100,"Good");
insert into SALESMAN_MASTER values ("S00003","Raj","P-7","Bandra","Mumbai",400032,"Maharashtra",3000,200,100,"Good");
insert into SALESMAN_MASTER values ("S00004","Ashish","A/5","Juhu","Mumbai",400044,"Maharashtra",3500,200,150,"Good");

-- insert data in sales-order table
insert into SALES_ORDER values ("O19001", "C00001","12-June-2004", "S00001", "F", "N", "20-July-2002", "In Process");
insert into SALES_ORDER values ("O19002", "C00002","25-June-2004",  "S00002", "P", "N", "27-June-2002", "Cancelled");
insert into SALES_ORDER values ("O46865", "C00003","18-Feb-2004",  "S00003", "F", "Y", "20-Feb-2002", "Fulfilled");
insert into SALES_ORDER values ("O19003", "C00001","03-April-2004", "S00001", "F", "Y", "07-April-2002", "Fulfilled");
insert into SALES_ORDER values ("O46866", "C00004","20-May-2004",  "S00002", "P", "N", "22-May-2002", "Cancelled");
insert into SALES_ORDER values ("O19008", "C00005","24-May-2004", "S00004", "F", "N", "26-July-2002", "In Process");

-- insert data in sales-order-detail tabel
insert into SALES_ORDER_DETAILS values ("O19001","P00001",4,4,525);
insert into SALES_ORDER_DETAILS values ("O19001","P07965",2,1,8400);
insert into SALES_ORDER_DETAILS values ("O19001","P07885",2,1,5250);
insert into SALES_ORDER_DETAILS values ("O19002","P00001",10,0,525);
insert into SALES_ORDER_DETAILS values ("O46865","P07868",3,3,3150);
insert into SALES_ORDER_DETAILS values ("O46865","P07885",3,1,5250);
insert into SALES_ORDER_DETAILS values ("O46865","P00001",10,10,525);
insert into SALES_ORDER_DETAILS values ("O46865","P03450",4,4,1050);
insert into SALES_ORDER_DETAILS values ("O19003","P03453",2,2,1050);
insert into SALES_ORDER_DETAILS values ("O19003","P06734",1,1,12000);
insert into SALES_ORDER_DETAILS values ("O46866","P07965",1,0,8400);
insert into SALES_ORDER_DETAILS values ("O46866","P07975",1,0,1050);
insert into SALES_ORDER_DETAILS values ("O19008","P00001",10,5,525);
insert into SALES_ORDER_DETAILS values ("O19008","P07975",5,3,1050);