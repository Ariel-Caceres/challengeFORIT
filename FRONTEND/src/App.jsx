
import "./styles/app.css"
import { TaskForm } from "./components/taskForm"
import { TaskList } from "./components/taskList"
import { useState } from "react"
import { useEffect } from "react"

export const App = () => {
    const [ task , setTask ] = useState([])


    useEffect(()=>{
            const fetchData = async () =>{
                try{
                    let res = await fetch("http://localhost:3000/api/tasks")
                    let tareas = await res.json()
                    console.log(task)
                    if(tareas.redirect){
                        window.location.href = tareas.redirect
                    }else{
                        setTask(tareas)    
                        
                    }

                }catch(error){
                    console.error("EXPLOTO EL SERVER",error);
                    
                }
            }
        fetchData()
    },[])
     
    const recargar = () =>{
        window.location.reload();  
      }
    return (
        <>
            <header>
                <h1>Challenge ingreso a Academia ForIT 2025</h1>
                <nav>
                    <ul>
                        <li><a href="">
                            Home 🏠
                        </a></li>
                        <li><a href="">

                        </a></li>
                        <li><a href=""></a></li>
                    </ul>
                </nav>
            </header>
            <main>
                {/* <TaskList /> */}
                <TaskForm />
                <button onClick={
                    recargar
                }>
                    hola
                </button>
            </main>
            
     
        </>
    )
}