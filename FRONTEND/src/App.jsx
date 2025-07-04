
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css"
import { TaskForm } from "./components/taskForm"
import { TaskList } from "./components/taskList"
import { TaskItem } from "./components/taskItem"
import { Link } from "react-router-dom";
export const App = () => {

    return (
        <Router>
            <header>
                <h1>Challenge ingreso a Academia ForIT 2025</h1>
                <nav>
                    <Link to="/">Home 🏠</Link>
                </nav>
            </header>

            <main>
            <Routes>
                <Route path="/"    element={<TaskList />} />
                <Route path="/form" element={<TaskForm />} />
                <Route path="/task" element={<TaskItem />} />
            </Routes>
                
            </main>
        </Router>

    )
}