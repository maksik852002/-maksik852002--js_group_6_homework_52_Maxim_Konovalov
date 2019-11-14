import React, {Component} from 'react';
import nanoid from 'nanoid';
import Task from './components/task/task';
import Form from './components/form/form';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    tasks : [
      {title:'Buy Milk', id: nanoid()},
      {title:'Walk with Dog', id: nanoid()},
      {title:'Do homework', id: nanoid()},
    ],
    newTask: '',
  };

  doneTask = (id) => {
    const index = this.state.tasks.findIndex(t=> t.id === id);
    const tasks = [...this.state.tasks]
    tasks[index] = {...tasks[index],isChecked:!tasks[index].isChecked}
    this.setState({tasks});
  }

  addTask = (e) => {
    e.preventDefault();
    const task = {title:this.state.newTask, id: nanoid()};
    this.setState({tasks: [...this.state.tasks, task], newTask: ''});
  }

  removeTask = id => {
    const index = this.state.tasks.findIndex(t=> t.id === id);
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({tasks});
  }
  
  render = () =>  (
    <div className="container">
      <Form 
      value = {this.state.newTask}
      click = {e => this.addTask(e)}
      change = {e => this.setState({newTask: e.target.value})}
      />
      {this.state.tasks.map((task) => (
        <Task
          key = {task.id}
          todotext={task.title}
          done = {task.isChecked}
          remove={() => this.removeTask(task.id)}
          checked= {() => this.doneTask(task.id)}
        />
      ))}
    </div>
  );
}

export default App;