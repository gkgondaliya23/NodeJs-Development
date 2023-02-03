-- Library Management System
-- \sql
-- \connect root@localhost:3306

--1. create database library(dbname)
-- show databases;
-- use library(dbname)

--2. create table books
create table books
(
    book_id int primary key,
    title varchar(255),
    author varchar(255),
    ISBN varchar(50),
    publisher varchar(255),
    publication_date Date,
    category varchar(50),
    available tinyint
);

-- create table members
create table members
(
    member_id int primary key,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(100),
    phone varchar(50),
    address varchar(255),
    membership_type varchar(50),
    membership_start date,
    membership_end date
);

-- create table loans
create table loans
(
    loan_id int primary key,
    member_id int,
    book_id int,
    loan_data date,
    return_date date,
    foreign key (member_id) references members(member_id),
    foreign key (book_id) references books(book_id)
);


-- Insert data into books
INSERT INTO books VALUES(1, "To Kill a Mockingbird", "Harper Lee", "9780061120084", "HarperCollins Publishers", "1960-07-11", "Literature", 1);
INSERT INTO books VALUES(2, "The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", "Scribner", "1925-04-10", "Literature", 0);
INSERT INTO books VALUES(3, "Pride and Prejudice", "Jane Austen", "9781447277590", "Pan Macmillan", "1813-01-28", "Classic", 1);
INSERT INTO books VALUES(4, "Harry Potter and the Philosopher's Stone", "J.K. Rowling", "9781338132524", "Scholastic", "1997-06-26", "Fantasy", 1);
INSERT INTO books VALUES(5, "The Diary of a Young Girl", "Anne Frank", "9780670012732", "Penguin Classics", "1947-06-01", "History", 1);
INSERT INTO books VALUES(6, "The Catcher in the Rye", "J.D. Salinger", "9781439559415", "Little, Brown and Company", "1951-07-16", "Literature", 0);
INSERT INTO books VALUES(7, "The Lord of the Rings", "J.R.R. Tolkien", "9780345339683", "Ballantine Books", "1954-07-29", "Adventure", 1);
INSERT INTO books VALUES(8, "The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "9781409151138", "Pan Macmillan", "1979-10-12", "Science Fiction", 1);
INSERT INTO books VALUES(9, "Brave New World", "Aldous Huxley", "9780571273577", "Faber & Faber", "1932-04-01", "Science Fiction", 0);

-- Insert data into members
INSERT INTO members VALUES(1, "John", "Doe", "johndoe@email.com", "123456789", "123 Main St", "Gold", "2022-01-01", "2023-01-01");
INSERT INTO members VALUES(2, "Jane", "Doe", "janedoe@email.com", "987654321", "456 Main St", "Silver", "2022-02-02", "2023-02-02");
INSERT INTO members VALUES(3, "Jim", "Smith", "jimsmith@email.com", "123789456", "789 Main St", "Bronze", "2022-03-03", "2023-03-03");
INSERT INTO members VALUES(4, "Tom", "Latham", "tomlatham@email.com", "654378912", "234 Main St", "Gold", "2022-03-03", "2023-03-03");
INSERT INTO members VALUES(5, "David", "Warner", "jimsmith@email.com", "125437896", "541 Main St", "Bronze", "2022-03-10", "2023-03-10");

-- Insert data into loans
INSERT INTO loans VALUES (1, 1, 1, "2022-01-01", "2022-01-15");
INSERT INTO loans VALUES (2, 2, 2, "2022-02-02", "2022-02-15");
INSERT INTO loans VALUES (3, 3, 3, "2022-03-03", "2022-03-15");
INSERT INTO loans VALUES (4, 4, 4, "2022-04-03", "2022-04-15");
INSERT INTO loans VALUES (5, 5, 5, "2022-05-03", NULL);
INSERT INTO loans VALUES (6, 3, 8, "2022-05-03", NULL);

-- Select available books
SELECT * FROM books WHERE available = 1;

-- Select current members
SELECT * FROM members WHERE membership_end > CURRENT_DATE();

-- Select books on loan with member information
SELECT books.title, books.author, members.first_name, members.last_name
FROM books
JOIN loans ON books.book_id = loans.book_id
JOIN members ON loans.member_id = members.member_id
WHERE loans.return_date IS NULL;

-- Update the "return_date" of the loan with loan_id = 1 to the current date
UPDATE loans SET return_date = CURRENT_DATE() WHERE loan_id = 1;

-- Delete the book with specific book_id 
DELETE FROM books WHERE book_id = 9;