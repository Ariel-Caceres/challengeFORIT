
import "../styles/taskForm.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

export const TaskForm = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const task = location.state?.task || null;
  const [dataForm, setDataForm] = useState(task ?? { title: "", description: "" })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const method = task ? "PUT" : "POST";
    try {
      const url = task?.id
        ? `http://localhost:3000/api/tasks/${task.id}`
        : "http://localhost:3000/api/tasks";

      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),

      });
      navigate("/")
    } catch (error) {
      console.log(error, "ACA ESTA EL ERROR")
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      [name]: value,
    }));
  }

  return (
    <div className="formulario">
      <i className="fa-regular fa-circle-xmark" onClick={() => navigate("/")}></i>
      <span>{task ? "Editar Tarea" : "Agregar tarea"}</span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" id="title" value={dataForm.title} placeholder="Ej. Dormir" onChange={handleChange} required />
        <label htmlFor="description">Descripción:</label>
        <input type="text" name="description" id="description" value={dataForm.description} placeholder="Dormir 8 horas" onChange={handleChange} />
        <span>Creado el: {task?.createAt ?? new Date().toLocaleString()}</span>
        <button type="submit">{task ? "Actualizar" : "Guardar"}</button>

      </form>
    </div>

  )
}