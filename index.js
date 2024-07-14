import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app=express();
const port=3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname,'public')))
app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.get("/aboutnodemcu",(req,res)=>{
    res.render("aboutnodemcu.ejs");
})
app.get("/whythisisproject?",(req,res)=>{
    res.render("whythisisproject.ejs");
})
app.get("/components",(req,res)=>{
    res.render("components.ejs");
})
app.get("/connection",(req,res)=>{
    res.render("connection.ejs");
})
app.listen(port,()=>{
    console.log(`Listening the port ${port}`)
})

