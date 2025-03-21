import { useLocation } from "react-router-dom";
import "../styles/taskItem.css"

export const TaskItem = () => {
    const location = useLocation();
    const task = location.state?.task

    return (
        <div className="task">
            <strong>Titulo:</strong>
            <h3>{task.title}</h3>
            <strong>Descripción:</strong>
            <p>{task.description}</p>
            <strong>Estado:</strong>
            <span>
                {task.completed ? "Realizado" : "Sin Realizar"}
            </span>
            <strong>Fecha de creación:</strong>
            <span> {task.createAt}</span>
        </div>
    )
}