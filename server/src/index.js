import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sai8844*",
  database: "test",
});
db.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

app.get("/", (req,res)=>{
  const sqlInsert="INSERT INTO Vedios VALUES(2,"upload2", LOAD_FILE("C:/Users/nanna/OneDrive/Saikiran"))";
  db.query(sqlInsert,(err,result)=>{
    console.log("error", err);
    console.log("result", result);
  })
  res.send("Hello")
})

app.listen(8800, () => {
  console.log("Connected to backend.");
});
