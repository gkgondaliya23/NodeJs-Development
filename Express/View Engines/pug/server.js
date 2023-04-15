const express = require('express');
const pug = require('pug');
const app = express();
const PORT = 7000;

app.set("view engine", 'pug');



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