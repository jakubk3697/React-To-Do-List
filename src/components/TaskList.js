import React from 'react'
import Task from './Task'
import './TaskList.css'

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)

    done.sort((a, b) => b.finishDate - a.finishDate)

    active.sort((a, b) => {
        if (a.text < b.text) return -1
        if (a.text > b.text) return 1
        return 0
    })

    let activeTasks = active.map(task => (
        <Task
            key={task.id}
            id={task.id}
            task={task}
            delete={props.delete}
            done={props.done}
            active={props.active}
            finishDate={props.finishDate}
            important={props.important}
            text={props.text}
        />
    ))

    const doneTasks = done.map(task => (
        <Task
            key={task.id}
            id={task.id}
            task={task}
            delete={props.delete}
            done={props.done}
            active={props.active}
            finishDate={props.finishDate}
            important={props.important}
        />
    ))
    return (
        <>
            <div className="active">
                <h2>Zadania do zrobienia:</h2>
                {activeTasks}
            </div>
            <div className="done">
                <h3>Zadania zrobione <em>({done.length})</em></h3>
                {done.length > 5 ? <span>Wyświetlonych jest jedynie 5 ostatnich elementów</span> : null}
                <li>{doneTasks.slice(0, 5)}</li>
            </div>
        </>
    );
}


export default TaskList;