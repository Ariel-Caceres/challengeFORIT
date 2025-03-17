
import "../styles/taskList.css"

export const TaskList = () => {
    return (
        <section>
            <div className="titulo">
                <span>Tareas</span>
                <div className="filtro">
                    <i className="fa-solid fa-filter"></i>
                    <select>
                        <option value="realizados">Realizados</option>
                        <option value="no-realizados">No realizados</option>
                    </select>
                </div>
            </div>
            <div className="tareas-container">
                <div className="tarea">
                    <form action="">
                    <input type="checkbox" name="" id=""/>
                    </form>

                    <div className="detalle">
                        <h3>Titulo</h3>
                        <p>Descripción</p>
                    </div>
                    <div className="iconos">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
            <div className="agregar-tarea">
                <button>
                    <span>Agregar tarea</span>
                </button>
            </div>
        </section>
    )
}