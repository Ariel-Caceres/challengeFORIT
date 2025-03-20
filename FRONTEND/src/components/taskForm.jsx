
import "../styles/taskForm.css"
import { useState } from "react"

export const TaskForm = () => {    
    const [dataForm , setDataForm] = useState()
    
    const handleSubmit  = async (event)=>{
        event.preventDefault()
        const response =  await fetch("http://localhost:3000/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body:  JSON.stringify(dataForm), 
            
        });
        console.log(response)

        window.location.reload()
    }
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setDataForm((prevDataForm) => ({
            ...prevDataForm, 
            [name]: value,   
        }));
    }
    
    return (
        <div className="formulario">
        <i className="fa-regular fa-circle-xmark"></i>
        <span>Agregar tarea</span>
        <form method="POST" onSubmit={handleSubmit}>
          <label htmlFor="title">Título:</label>
          <input type="text" name="title" id="title" placeholder="Ej. Dormir" onChange={handleChange} />
      
          <label htmlFor="description">Descripción:</label>
          <input type="text" name="description" id="description" placeholder="Dormir 8 horas" onChange={handleChange} />
      
          <button type="submit">Guardar</button>
        </form>
      </div>
      
    )
}