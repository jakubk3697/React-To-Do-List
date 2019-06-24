import React from 'react';
import './task.css'

const Task = (props) => {

    const { text, date, id, active, important, finishDate } = props.task
    if (active) {
        return (
            <div>
                {/* <strong style={important ? style : null}>{text}</strong> <em> do -  {date} </em> */}
                <strong className={important ? "styleImp" : null}>{text}</strong> <em> do: {date} </em>
                <button onClick={() => props.done(id)}>Zrobione</button>
                <button onClick={() => props.delete(id)}>X</button>
            </div>
        )
    } else {
        let finish = new Date(finishDate).toISOString().slice(0, 10) + " " + new Date(finishDate).toISOString().slice(11, 19)
        return (
            <div>
                <strong>{text}</strong> <em>- do {date}</em> - wykonano - <em>{finish} </em>
                <button onClick={() => props.delete(id)}>X</button>
            </div>
        )
    }
}

export default Task;