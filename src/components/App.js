import React, {
  Component
} from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'
import './App.css'

class App extends Component {
  state = {
    counter: 0,
    tasks: [

    ]
  }

  handleDone = (id) => {
    let tasks = [...this.state.tasks];

    tasks.map(task => {
      if (task.id === id) {
        task.active = false
        task.finishDate = new Date().getTime()
      }
      return null
    })

    this.setState({
      tasks,
    })
  }

  handleDelete = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks,
    })
  }

  addTask = (text, date, important) => {
    if (text.length < 3) return null
    const task = {
      id: this.state.tasks.length + 1,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    }

    this.setState(prevState => ({
      tasks: prevState.tasks.concat(task)
    }))
    return true
  }

  render() {
    return ( <
      div className = "form" >
      <
      h1 className = "title" > To Do List < /h1> <
      AddTask add = {
        this.addTask
      }
      /> <
      TaskList tasks = {
        this.state.tasks
      }
      done = {
        this.handleDone
      }
      delete = {
        this.handleDelete
      }
      counter = {
        this.state.counter
      }
      finishDate = {
        this.state.finishDate
      }
      important = {
        this.state.important
      }
      /> <
      /div>
    );
  }
}

export default App;