const methodOverride = require("method-override")
const express = require("express");
const path = require("path")
const fs = require("fs")
const app = express();
const port = 3000;
const cors = require("cors");
const { json } = require("stream/consumers");
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride("_method"))


const leerJson = () =>{
    let data = fs.readFileSync(path.join(__dirname,"./data/task.json"))
    let tareas = JSON.parse(data)
    return tareas
}
const crearJson = (parametro) =>{
    fs.writeFileSync(path.join(__dirname,"./data/task.json"),JSON.stringify(parametro, null, 2))
}

app.get("/api/tasks",(req,res)=>{
    let tareas = leerJson()
    res.json(tareas)
})

app.post("/api/tasks",(req,res)=>{
    let ApiTareas = leerJson();
    const{title , description} = req.body
    let nuevaTarea = {
        id: ApiTareas.length == 0 ? 1 : ApiTareas[ApiTareas.length-1].id+1,
        title: title,
        description: description,
        completed: false,
        createAt: new Date().toLocaleDateString()
    }
    ApiTareas.push(nuevaTarea)
    crearJson(ApiTareas)
    res.json({ redirect: "SI" });
})

app.delete("/api/tasks/:id",(req,res)=>{
})

app.put("/api/tasks/:id",(req,res)=>{
})

app.listen(port,()=>{
    console.log(`App listening on  http://localhost:${port}`);
})