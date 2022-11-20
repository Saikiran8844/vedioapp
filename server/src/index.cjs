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
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(3000, () => console.log('Express server is running at port no : 3000'));


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

//Insert an employees
app.post('/vedios', (req, res) => {
    let vid = req.body;
    var sql = "SET @vid_ID= 2;SET @Vid_NAME = myvedio ;SET @VEDIO = ?;\
    CALL EmployeeAddOrEdit(@vid_ID,@Vid_NAME,@VEDIO);";
    mysqlConnection.query(sql, [vid.vid_ID, vid.vid_NAME, vid.VEDIO], (err, rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted vedio ID: '+element[0].vid_ID);
            });
        else
            console.log(err);
    })
});

//Update an employees
app.put('/vedios', (req, res) => {
  let vid = req.body;
  var sql = "SET @vid_ID= ?;SET @Vid_NAME = ?;SET @VEDIO = ?;\
  CALL EmployeeAddOrEdit(@vid_ID,@Vid_NAME,@VEDIO);";
  mysqlConnection.query(sql, [vid.vid_ID, vid.vid_NAME, vid.VEDIO], (err, rows, fields) => {
        if (!err)
            res.send('Updated successfully');
        else
            console.log(err);
    })
});




 
