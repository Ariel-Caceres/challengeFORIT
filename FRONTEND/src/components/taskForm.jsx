
import "../styles/taskForm.css"
export const TaskForm = () => {    
    return (
        <div className="formulario">
            <i className="fa-regular fa-circle-xmark"> </i>
            <span>Agregar tarea</span>
            <form action="" method="POST">
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" id="title" placeholder="Ej. Dormir" />
                <label htmlFor="description">Descripción:</label>
                <input type="text" name="description" id="description" placeholder="Dormir 8 horas" />
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}