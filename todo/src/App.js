import './App.css';
import Header from './components/header/header.component';
import Tasks from './components/tasks/tasks.component';
import AddTask from './components/addtask/addtask.component';
import { useState, useEffect } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    const oof = async () => {
      await getTasks()
    }
    oof()
  }, [])

  const getTasks = async () => {
    const tasksFromBackend = await fetchTasks()
    setTasks(tasksFromBackend)
  }

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/api/v1/tasks")
    const data = await res.json()
    return data
  }



  async function addTask(task) {
    const res = await fetch(`http://localhost:5000/api/v1/addtask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
    await getTasks()
    
  }

  async function deleteTask(id) {
    await fetch(`http://localhost:5000/api/v1/task/${id}`, {method: "DELETE"})
    setTasks(tasks.filter((task) => task.id !== id))
    await getTasks()
  }

  async function toggleReminder(id) {
    await fetch(`http://localhost:5000/api/v1/task/${id}`, {method: "PATCH"})
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    await getTasks()
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onClick={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
