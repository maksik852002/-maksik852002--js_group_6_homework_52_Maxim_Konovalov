import React, {Component} from 'react';
import nanoid from 'nanoid';
import Task from './components/task/task';
import Form from './components/form/form';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    tasks : [
      {title:'Buy Milk', id:nanoid(), checked:false},
      {title:'Walk with Dog', id:nanoid(), checked:false},
      {title:'Do homework', id:nanoid(), checked:false},
    ],
    inpValue: '',
  };
  
  doneTask = id => {
    const index = this.state.tasks.findIndex(t=> t.id === id);
    const tasks = [...this.state.tasks];
    tasks[index] = {...tasks[index],checked:!tasks[index].checked};
    this.setState({tasks});
  };

  addTask = e => {
    e.preventDefault();
    const task = {title:this.state.inpValue, id:nanoid(), checked:false};
    this.setState({tasks: [...this.state.tasks, task], inpValue: ''});
  };

  removeTask = id => {
    const index = this.state.tasks.findIndex(t=> t.id === id);
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({tasks});
  };

  drawTask = array => {
    return (
      array && array.map(task => (
        <Task
          task = {task}
          key = {task.id}
          remove = {() => this.removeTask(task.id)}
          check = {() => this.doneTask(task.id)}/> 
      ))
    )
  };

  render = () =>  {
    let checkedTasks = this.state.tasks.filter(task => task.checked)
    let unCheckedTasks = this.state.tasks.filter(task => !task.checked)
    return (
      <div className="container">
        <Form 
          value = {this.state.inpValue}
          add = {e => this.addTask(e)}
          change = {e => this.setState({inpValue:e.target.value})}
        />
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <div className="border border-secondary rounded p-2">
              <h1 className="text-center">TO DO</h1>
              {this.drawTask(unCheckedTasks)}
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="border border-secondary rounded p-2">
              <h1 className="text-center">DONE</h1>
              {this.drawTask(checkedTasks)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;