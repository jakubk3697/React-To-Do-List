import React, { Component } from 'react'
import './AddTask.css'

class AddTask extends Component {
    state = {
        text: "",
        date: new Date().toISOString().slice(0, 10),
        checked: "",
    }


    handleInputChange = e => {
        if (e.target.name === "date") {
            this.setState({
                date: e.target.value
            })
        } else if (e.target.name === "text") {
            this.setState({
                text: e.target.value
            })
        }
    }

    handleCheckboxChange = e => {
        this.setState({
            checked: e.target.checked
        })
    }
    handleClick = e => {
        e.preventDefault();
        const { text, date, checked } = this.state;
        const add = this.props.add(text, date, checked);
        if (add) {
            this.setState({
                text: '',
                date: new Date().toISOString().slice(0, 10),
                checked: false,
            })
        }
    }


    render() {
        const minDate = new Date().toISOString().slice(0, 10);
        let maxDate = (new Date().toISOString().slice(0, 4) * 1 + 1);
        maxDate = maxDate + new Date().toISOString().slice(4, 10)
        return (
            <>
                <div>
                    <input type="text" placeholder="Wpisz zadanie..." name="text" value={this.state.text} onChange={this.handleInputChange} />
                    <input type="checkbox" id="important" checked={this.state.checked} onChange={this.handleCheckboxChange} />
                    <label htmlFor="important">Priorytet</label>
                    <br />
                    <label htmlFor="date">Do kiedy zrobić:</label>
                    <input type="date" id="date" name="date" value={this.state.date} onChange={this.handleInputChange} min={minDate} max={maxDate} />
                    <br />
                    <button className="btnAdd" onClick={this.handleClick}>Dodaj</button>
                </div>

            </>
        );
    }
}

export default AddTask;