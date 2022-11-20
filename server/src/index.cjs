const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sai8844*',
    database: 'test',
    multipleStatements: true,
    fatal:true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(3306, () => console.log('Express server is running at port no : 3000'));


//Get all employees
app.get('/vedio', (req, res) => {
    mysqlConnection.query('SELECT * FROM vedios', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Get an employees
app.get('/vedios/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM vedios where vid_ID=1', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete an employees
app.delete('/vedios/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM vedios WHERE EmpID = 1', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});



