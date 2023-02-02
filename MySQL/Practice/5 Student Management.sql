-- Student Management System
-- \sql
-- \connect root@localhost:3306

--1. create database stumanage(dbname)
-- show databases;
-- use stumanage(dbname)

--2. create table students
create table students
(
    student_id int primary key,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(100),
    phone varchar(10)
);

--  insert data into students
insert into students values (1, "Keval", "Satani", "kevelsatani@gmail.com", "9768564560");
insert into students values (2, "Aaditya", "Hirpara", "aadihirpara@gmail.com", "9976786561");
insert into students values (3, "Jay", "Sarvaiya", "sarvaiyajay@gmail.com", "9745324598");
insert into students values (4, "Nency", "Sheladiya", "nenusheladiya@gmail.com", "8963361166");
insert into students values (5, "Urvashi", "Devani", "devaniurvashi@gmail.com", "7968774523");
insert into students values (6, "Amisha", "Shiroya", "amishiroya@gmail.com", "9979812345");
insert into students values (7, "Vrushabh", "Satasiya", "vrusatasiya@gmail.com", "9274535099");
insert into students values (8, "Utshav", "Moradiya", "moradiyaustav@gmail.com", "9374834499");
insert into students values (9, "Divya", "Parmar", "divuparmar@gmail.com", "9774731297");
insert into students values (10, "Priyank", "Tala", "priyanktala@gmail.com", "9274443098");

-- create table courses
create table courses
(
    course_id int primary key,
    title varchar(100),
    description varchar(255),
    credits int
);

-- insert data into courses
insert into courses values (1, "C Language", "Fundamental Development", 6000);
insert into courses values (2, "C++ Language", "Fundamental Development", 7000);
insert into courses values (3, "Data Structure", "Fundamental Development", 10000);
insert into courses values (4, "MERN Stack", "Full-stack Development", 100000);
insert into courses values (5, "Web Development", "Back-End Development", 60000);
insert into courses values (6, "Web Design", "Frontend Development", 70000);
insert into courses values (7, "UI-UX Design", "Graphics Design", 40000);
insert into courses values (8, "Flutter Developement", "Mobile App development", 60000);
insert into courses values (9, "Android Developement", "Mobile App development", 55000);
insert into courses values (10, "iOS Developement", "Mobile App development", 60000);
insert into courses values (11, "Python Developement", "Back-End development", 90000);
insert into courses values (12, "Machine Learning", "Python development", 120000);
insert into courses values (13, "Data Analysis", "Python- Django development", 120000);

-- create table enrollments
create table enrollments
(
    enrollment_id varchar(50) primary key,
    student_id int,
    course_id int,
    start_date varchar(30),
    last_date varchar(30),
    grade varchar(10),
    foreign key (student_id) references students(student_id),
    foreign key (course_id) references courses(course_id)
);

-- insert data into enrollments
insert into enrollments values ("SQ0001", 1, 1, "20-05-2021", "29-06-2021", 'A++');
insert into enrollments values ("SQ0002", 2, 2, "30-06-2021", "26-07-2021", 'A++');
insert into enrollments values ("SQ0003", 3, 4, "30-07-2021", "26-07-2022", 'A');
insert into enrollments values ("SQ0004", 4, 7, "30-07-2021", "26-11-2021", 'A++');
insert into enrollments values ("SQ0005", 5, 6, "01-07-2021", "20-02-2022", 'B++');
insert into enrollments values ("SQ0006", 6, 12, "15-07-2021", "20-08-2022", 'A');
insert into enrollments values ("SQ0007", 7, 8, "15-07-2021", "12-02-2022", 'A+');
insert into enrollments values ("SQ0008", 8, 11, "15-07-2021", "20-08-2022", 'B');

-- create table teachers
create table teachers
(
    teacher_id int primary key,
    teacher_fname varchar(50),
    teacher_lname varchar(50),
    teacher_email varchar(100),
    teacher_phone varchar(10)
);

-- insert data into teachers
insert into teachers values (1, "Nikunj", "Dudhat", "sq.nikunj@gmail.com", "9638963707"); 
insert into teachers values (2, "Vivek", "Kachhadiya", "sq.vivek@gmail.com", "7984738819"); 
insert into teachers values (3, "Mohil", "Thummar", "sq.mohil@gmail.com", "8140843697"); 
insert into teachers values (4, "Paresh", "Rajput", "sq.paresh@gmail.com", "9586765994"); 
insert into teachers values (5, "Jatin", "Raiyani", "sq.jatin@gmail.com", "8469536345"); 
insert into teachers values (6, "Nilesh", "Pethani", "sq.nilesh@gmail.com", "8128064295"); 
insert into teachers values (7, "Girish", "Gondaliya", "sq.girish@gmail.com", "9016669990"); 

-- create table teachers-course
create table teacher_course
(
    teacher_id int ,
    course_id int,
    foreign key (teacher_id) references teachers(teacher_id),
    foreign key (course_id) references courses(course_id)
);

-- insert data into teacher_course
insert into teacher_course values (1, 7);
insert into teacher_course values (2, 6);
insert into teacher_course values (3, 8);
insert into teacher_course values (3, 9);
insert into teacher_course values (3, 10);
insert into teacher_course values (4, 4);
insert into teacher_course values (4, 11);
insert into teacher_course values (4, 12);
insert into teacher_course values (5, 5);
insert into teacher_course values (6, 13);
insert into teacher_course values (7, 1);
insert into teacher_course values (7, 2);
insert into teacher_course values (7, 3);


-- 4. retrieve all students from the "students" table.
select * from students;

-- 5. retrieve all courses from the "courses" table.
select * from courses;

-- 6. retrieve all teachers from the "teachers" table.
select * from teachers;

-- 7. Use the JOIN statement to retrieve course details including teacher name, students, and enrollments.
SELECT enrollments.enrollment_id, courses.*, teachers.teacher_fname,  students.first_name, students.last_name
FROM courses
JOIN teacher_course ON courses.course_id = teacher_course.course_id
JOIN teachers ON teacher_course.teacher_id = teachers.teacher_id
JOIN enrollments ON courses.course_id = enrollments.course_id
JOIN students ON enrollments.student_id = students.student_id;

-- 8. update the grade of a student in a specific course.
update enrollments set grade = 'A+' where enrollment_id = "SQ0008";

-- 9. delete an enrollment with a specific enrollment_id.
delete from enrollments where enrollment_id = "SQ0008";

-- 10. retrieve all courses that a specific teacher is teaching, using the teacher's first name.
SELECT courses.*, teachers.teacher_fname
FROM courses
JOIN teacher_course ON courses.course_id = teacher_course.course_id
JOIN teachers ON teacher_course.teacher_id = teachers.teacher_id
WHERE teachers.teacher_fname = "Girish";

-- 11. retrieve all students who are enrolled in a specific course, using the course's title.
SELECT students.first_name, courses.*, enrollments.grade
FROM students
JOIN enrollments ON students.student_id = enrollments.student_id
JOIN courses ON enrollments.course_id = courses.course_id
WHERE courses.title = 'C Language';