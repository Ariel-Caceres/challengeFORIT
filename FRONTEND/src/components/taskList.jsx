
import { useEffect, useState } from "react"
import "../styles/taskList.css"

export const TaskList = () => {

    const [task, setTask] = useState([])
    const [value, setValue] = useState("todos")

    const fetchData = async () => {
        try {
            let res = await fetch("http://localhost:3000/api/tasks")
            let tareas = await res.json()
            console.log(tareas)
            if (tareas.redirect) {
                window.location.href = tareas.redirect
            } else {
                setTask(tareas)

            }
        } catch (error) {
            console.error("EXPLOTO EL SERVER", error);

        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    const eliminarTarea = (id) => {
        fetch(`http://localhost:3000/api/tasks/${id}`, {
            method: "DELETE",
        })
        location.reload()

    }
    const checkBox = (id) => {
        fetch(`http://localhost:3000/api/tasks/${id}`, {
            method: "PUT",
        })

    }
    const mensajes = {
        realizados: "No hay tareas realizadas",
        "no-realizados": "No hay tareas sin realizar",
        todos: "No hay tareas"
      };
    const filtrarTareas = task.filter ( t=>{
        if(value === "realizados"){
            return t.completed === true
        }
        if (value === "no-realizados") {
            return t.completed === false
        }
        return true
})
    

    return (
        <section>
            <div className="titulo">
                <span>Tareas</span>
                <div className="filtro">
                    <i className="fa-solid fa-filter"></i>
                        <select onChange={(e)=>setValue(e.target.value)}>
                        <option value="todos">Todos</option>
                        <option value="realizados" >Realizados</option >
                        <option value="no-realizados">No realizados</option>
                    </select>
                </div>
            </div>
            <div className="tareas-container">
            {filtrarTareas.length === 0 && <p className="cartel">{mensajes[value]}</p>}

                {filtrarTareas.map((t) => (
                  <div className="tarea" key={t.id}>
                  <input type="checkbox" name="" id="" checked={t.completed}
                      onChange={() => {
                          checkBox(t.id)
                          location.reload()
                      }} />
                  <div className="detalles">
                      <h3>{t.title}</h3>
                      <p>{t.description}</p>
                  </div>
                  <div className="iconos">
                      <div className="editar">
                          <span>Editar<i className="fa-regular fa-circle-down"></i></span>
                          <i className="fa-solid fa-pen-to-square" id={t.id}></i>
                      </div>
                      <div className="eliminar">
                          <span>Eliminar<i className="fa-regular fa-circle-down"></i></span>
                          <i className="fa-solid fa-trash" id={t.id} onClick={() => {
                              eliminarTarea(t.id)
                              console.log(t.id)
                          }}></i>
                      </div>
                  </div>
              </div>
      ))}
                
            </div>
            <div className="agregar-tarea">
                <button>
                    <span>Agregar tarea</span>
                </button>
            </div>
        </section>
    )
}

