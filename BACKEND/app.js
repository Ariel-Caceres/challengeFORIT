const express = require("express");
const path = require("path")
const app = express();
const methodOverride = require("method-override")
const port = 3000;

app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride("_method"))


app.get("/api/tasks",(req,res)=>{
})

app.post("/api/tasks",(req,res)=>{
})

app.delete("/api/tasks/:id",(req,res)=>{
})

app.put("/api/tasks/:id",(req,res)=>{
})

app.listen(port,()=>{
    console.log(`App listening on  http://localhost:${port}`);
})