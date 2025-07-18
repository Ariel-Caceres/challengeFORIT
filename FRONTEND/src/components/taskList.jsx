
import { useEffect, useState } from "react"
import "../styles/taskList.css"
import { useNavigate } from "react-router-dom"

export const TaskList = () => {

    const [task, setTask] = useState([])
    const [value, setValue] = useState("todos")
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            let res = await fetch("https://challengeforit.onrender.com/api/tasks")
            let tareas = await res.json()
            setTask(tareas)
        } catch (error) {
            console.error("EXPLOTO EL SERVER", error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const eliminarTarea = async (id) => {
        const res = await fetch(`https://challengeforit.onrender.com/api/tasks/${id}`, {
            method: "DELETE",
        })
        if (!res.ok) throw new Error("Error al eliminar los datos")
        fetchData()
    }
    const checkBox = async (id) => {
        await fetch(`https://challengeforit.onrender.com/api/check/${id}`, {
            method: "PUT",
        })
        fetchData()

    }
    const mensajes = {
        realizados: "No hay tareas realizadas 👎",
        "no-realizados": "No hay tareas sin realizar 👍",
        todos: "No hay tareas ✋"
    };
    const filtrarTareas = task.filter(t => {
        if (value === "realizados") {
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
                    <select onChange={(e) => setValue(e.target.value)}>
                        <option value="todos">Todos</option>
                        <option value="realizados" >Realizados</option >
                        <option value="no-realizados">No realizados</option>
                    </select>
                </div>
            </div>
            <div className="tareas-container">
                {filtrarTareas.length === 0 && <p className="cartel">{mensajes[value]}</p>}

                {filtrarTareas.map((t) => (
                    <div className="tarea" key={t.id} >
                        <input type="checkbox" name="" id="" checked={t.completed}
                            onChange={() => {
                                checkBox(t.id)
                            }} />
                        <div className="detalles" onClick={() => {
                            navigate("/task", { state: { task: t } })
                        }}>
                            <h3>{t.title}</h3>
                            <p>{t.description}</p>
                        </div>
                        <div className="iconos">
                            <div className="editar">
                                <span>Editar<i className="fa-regular fa-circle-down"></i></span>
                                <i className="fa-solid fa-pen-to-square" id={t.id} onClick={() => {
                                    navigate("/form", { state: { task: t } });
                                }}></i>
                            </div>
                            <div className="eliminar" onClick={() => eliminarTarea(t.id)}>
                                <span>Eliminar<i className="fa-regular fa-circle-down"></i></span>
                                <i className="fa-solid fa-trash" id={t.id} ></i>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="agregar-tarea">
                <button onClick={() => navigate("/form")}>
                    <span>Agregar tarea</span>
                </button>
            </div>
        </section>
    )
}

