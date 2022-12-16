import React, { Component } from "react";


import Form from './Form';
import Tasks from './Tasks';

import './Main.css'

export default class Main extends Component {
    state = {
        newTask: '',
        task: [],
        index: -1,
    }

    componentDidMount() {
        const task = JSON.parse(localStorage.getItem('task'))

        if (!task) return;

        this.setState({ task })
    }

    componentDidUpdate(prevProps, prevState) {
        const { task } = this.state;

        if (task === prevState.task) return;

        localStorage.setItem('task', JSON.stringify(task))

    }


    handleChange = (e) => { // I've to use arrow func cause' if not use that, this isn't work.
        this.setState({
            newTask: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        let { task, index } = this.state;
        let { newTask } = this.state;
        newTask.trim();
        if (newTask === '') return;
        if (task.indexOf(newTask) !== -1) return;

        const newTasks = [...task]; //We cant edit the state, so we need to create a new variable and spread the value of state TASK.

        if (index === -1) {
            this.setState({
                task: [...newTasks, newTask], //Cause newTasks is an array, we couldn't change this value like a variable, only copy spread ... 
                newTask: '',
            })
        } else {
            newTasks[index] = [...newTask]
            this.setState({
                task: [...newTasks],
                index: -1
            });
        }

    }

    handleEdit = (e, index) => {
        let { task } = this.state;

        this.setState({
            index,
            newTask: task[index],
        })
    }

    handleDelete = (e, index) => {
        const { task } = this.state;
        const newTask = [...task]
        newTask.splice(index, 1);

        this.setState({
            task: [...newTask]
        })
    }

    render() {
        const { newTask, task } = this.state;

        return (

            <div className="main">
                <h1>To do list</h1>

                <Form
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                    newTask={newTask}
                />
                <Tasks
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                    task={task}
                />

                <p className="footer">Made by Victor Pinheiro <span className="hrt">♥</span> </p>
            </div>
        )

    }

}