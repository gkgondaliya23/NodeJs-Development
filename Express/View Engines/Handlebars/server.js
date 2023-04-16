const express = require('express');
const hbs = require('hbs');
const app = express();
const PORT = 7000;

app.set("view engine", 'hbs');



app.get("/student", (req, res) => {
    let model = {
        studentId: "S011",
        studentName: "Swara",
        mathsMarks: 94,
        scienceMarks: 92,
        englishsMarks: 91,
        totalMarks: 277,
    };
    res.render("student", model);
});

app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`Server is starting at ${PORT}`);
})