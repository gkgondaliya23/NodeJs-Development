-- Product Table
-- \sql
-- \connect root@localhost:3306

--1. create database Products(dbname)
-- show databases;
-- use Products(dbname)

--2. create table
create table product
(
    product_id int PRIMARY KEY AUTO_INCREMENT,
    product_name varchar(255),
    product_description varchar(255),
    product_price int(10),
    product_quantity int,
    category varchar(255)
);


-- show table
desc product;

-- 3. insert data
insert into product values (1,"Kurti", "Western Kurti", 500, 50, "Fashion");
insert into product values (null,"Dress", "Punjabi Dress", 750, 60, "Fashion");
insert into product values (null,"T-shirts", "T-shirts", 800, 80, "Fashion");
insert into product values (null,"Trousers", "Western trousers", 1500, 50, "Fashion");

-- 4. all the data from the "product" table
select * from product;

-- 5. update the product_quantity = 100 of product_id = 2
update product set product_quantity = 100 where product_id = 2;

-- 6. delete a product with product_id = 4.
delete from product where product_id = 4;

-- 7.  retrieve data from the "product" table with a specific category and price range.
select category, product_price from product;

-- 8. retrieve data from the "product" table and sort it by product_price in descending order.
select * from product order by product_price desc;

-- 9.  retrieve data from the "product" table and group it by category.
select * from product group by category;