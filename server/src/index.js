import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


// add after 'const app = express();'

app.get('/video', (req, res) => {
  res.sendFile('assets/saikiran.mp4', { root: __dirname });
});

app.get("/", (req,res)=>{
 
  res.send("Hello connected to back end ")
})// add after require() statements

