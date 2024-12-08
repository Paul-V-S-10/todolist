import React, { useState } from 'react'
import { InputBox } from './ReUsable.jsx/InputBox';
import './App.css'

const App = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date()
    const day = days[date.getDay()]
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    const handleButtonClick = () => {
        setTasks((previous) => ([...previous, { id: Date.now(), value: task, status: false }]))
        setTask('')
    }
    const handleKeyPress = (e) => {
        console.log(e);
        if (e.key === 'Enter') {
            handleButtonClick();
        }};
        
    return (
        <div className='app'>
            <div className="tasks">
                <div className="heading"><h2>Welcome, its {day} ☕️</h2></div>
                <div className="asignTask">
                    {/* <InputBox
                placeholder='📝 Add Item...'
                onChange={setTask}
                /> */}
                    <input onKeyDown={handleKeyPress} className='asignTaskInput' type="text" placeholder='📝 Add Item...' value={task} onChange={(e) => setTask(e.target.value)} />
                    <button className='asignTaskButton' onClick={handleButtonClick}>➕</button>
                </div>
                <div className="displayTasks">
                    {tasks.map((obj, index) => (
                        <div className="displayTask" key={index}>
                            <input onChange={(e) => {
                                setTasks(tasks.filter(obj2 => {
                                    if (obj2.id == obj.id) {
                                        obj2.status = e.target.checked
                                    }
                                    return obj2
                                }))
                            }} type="checkbox" value='' />
                            <p>{obj.value}</p>
                            <button className='crossButton'>❌</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="completedTasks">
                <h2>Completed Tasks</h2>
                <div className="displayCompletedTasks">
                    {tasks.map((obj, index) => {
                        if (obj.status) {
                            return (
                                <div className="displayCompletedTask">
                                    <p>{obj.value} </p>
                                </div>
                            )}})}
                </div>
            </div>
        </div>
    )
}

export default App