
import "./styles/app.css"
import { TaskForm } from "./components/taskForm"
import { TaskList } from "./components/taskList"

export const App = () => {
   
     
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
                <TaskList />
                {/* <TaskForm method="put" /> */}
            </main>
            
     
        </>
    )
}