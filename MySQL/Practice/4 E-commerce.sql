-- Customers Table
-- \sql
-- \connect root@localhost:3306

--1. create database ecommerce(dbname)
-- show databases;
-- use ecommerce(dbname)

--2. create table customers
create table customers
(
    customer_id int PRIMARY KEY ,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(100),
    password varchar(255)
);

-- create table products
create table products
(
    product_id int PRIMARY KEY,
    product_name varchar(255),
    product_desc varchar(255),
    product_price int(10),
    product_quantity int,
    category varchar(255)
);

-- create table orders
create table orders
(
    order_id int PRIMARY KEY,
    customer_id int,
    order_date Date,
    total_price int(10),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- create table order_items
create table order_items
(
    order_item_id int PRIMARY KEY,
    order_id int,
    product_id int,
    quantity int,
    price int(10),
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- 3. insert data customers
insert into customers values (1,"Virat","Kohli","virkohli@example.com","Vir@12345");
insert into customers values (2,"Rohit","Sharma","rohsharma@example.com","Rohit@12345");
insert into customers values (3,"Suresh","Raina","surraina@example.com","Sraina@12345");
insert into customers values (4,"Umesh","Yadav","Uyadav@example.com","Yumesh@12345");
insert into customers values (5,"Jsprit","Bumrah","jsbumrah@example.com","Jassi@12345");
insert into customers values (6,"Shubhaman","Gill","Shubhgill@example.com","Shubhu@12345");


-- insert data products
insert into products values (1,"i-phone","i-phone 14 mobile",50000,50,"Mobile");
insert into products values (2,"Earphone","Sony Earphone",1500,150,"Accessories");
insert into products values (3,"Mouse","Circle wireless mouse",750,350,"Accessories");
insert into products values (4,"Samsung M31s","Samsung mobile",45000,90,"Mobile");
insert into products values (5,"Dell","Dell latitude 7400 ips",90000,350,"Laptop");
insert into products values (6,"Dell","Dell latitude 5400",60000,250,"Laptop");


-- insert data oreder_item
insert into order_items values (1,1,1,1,50000);
insert into order_items values (2,2,2,10,15000);
insert into order_items values (3,3,2,5,7500);
insert into order_items values (4,4,3,5,3750);
insert into order_items values (5,5,3,10,7500);
insert into order_items values (6,6,5,1,90000);


-- insert data orders
insert into orders values (1,1,"2023-01-20",1500);
insert into orders values (2,1,"2023-01-26",15000);
insert into orders values (3,3,"2023-01-27",6000);
insert into orders values (4,3,"2023-01-27",15500);
insert into orders values (5,4,"2023-01-29",7500);
insert into orders values (6,5,"2023-01-30",7000);


--4. retrieve all customers from the "customers" table
select * from customers;

--5. retrieve all products from the "products" table
select * from products;

--6. retrieve all orders from the "orders" table
select * from orders;

--7. retrieve all order items from the "order_items" table
select * from oreder_item;

-- 8. Use the JOIN statement to retrieve order details including customer information and product details
SELECT orders.order_id, customers.first_name, products.product_name,orders.order_date FROM orders INNER JOIN customers ON orders.customer_id=customers.customer_id;

-- 9. update the product_quantity of a product with a specific product_id
update products set product_quantity = 500 where product_id = 3;

-- 10. delete an order with a specific order_id.
delete from orders where order_id = 5;

-- 11. retrieve all orders placed by a specific customer, using the customer's email.


-- 12. retrieve all products in a specific category and sort them by price in ascending order