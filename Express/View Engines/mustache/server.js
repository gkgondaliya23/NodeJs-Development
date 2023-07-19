const express = require('express');
const mustache = require('mustache');
const mustacheExpress = require('mustache-express');
const app = express();
const PORT = 7070;

app.engine('mustache', mustacheExpress());
app.set("view engine", 'mustache');


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