const express = require('express');
const ejs = require('ejs');
const app = express();
const PORT = 7000;

app.set("view engine", 'ejs');

app.get('/index', (req, res)=>{
    var model = { x: 1000, y: 20};
    res.render('index', model);
});

app.get("/login", (req, res) => {
    let model = { uname: "qode", upwd: "qode@123" };
    res.render("login", model);
});

app.get("/student", (req, res) => {
    let model = {
        studentId: "S011",
        studentName: "Swara",
        studentMarks: 94,
        subjects: [
            { name: "maths", marks: "94" },
            { name: "science", marks: "93" },
            { name: "english", marks: "94" },
        ],
    };
    res.render("student", model);
});

app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`Server is starting at ${PORT}`);
})