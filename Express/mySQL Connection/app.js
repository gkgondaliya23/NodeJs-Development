const mysql = require('mysql2');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Swara@123',
    database:'development',
    port: 3306,
})  

connection.connect(function(err) {
    if (err) {
        console.log(err);
    }else
    {console.log("DB is Connected!");}
});


app.post('/create',(req,res)=>{
    const {client_no,name,address1, address2,city, state, pincode, baldue} = req.body;
    const client = {
        client_no,
        name,
        address1,
        address2,
        city,
        state,
        pincode,
        baldue
    }

    connection.query('insert into client_master set ?', client,(err, data) => {
        if (err) {
                    console.log(err);
                }
                res.json(data);
    })
})

app.get('/',(req,res)=>{
    connection.query('SELECT * FROM client_master', (err, data) => {
        if (err) {
                    console.log(err);
                }
                res.json(data);
    })
})
app.get('/:id',(req,res)=>{
    connection.query('SELECT * FROM client_master where pincode =' + req.params.id, (err, data) => {
        if (err) {
                    console.log(err);
                }
                res.json(data);
    })
})

app.listen(8000,(err)=>{
    if (err) {
            console.log(err);
        }else{
        console.log("Server is running");
        }
})