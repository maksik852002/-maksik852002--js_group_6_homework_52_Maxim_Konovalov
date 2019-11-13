import React, {Component} from 'react';
import './bootstrap.min.css';
import Task from './components/task/task';


class App extends Component {
  state = {
    tasks : [
      {inputValue : '', id:''}
    ],
    showTasks:false
  };

  updateInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  addTask = () => {
    const tasks = [] 
    tasks.push({todotext:this.state.inputValue, id:'sdgsdg'})
    this.setState({tasks, showTasks: true});
    
  }

  removeTask = id => {
    const taskIndex = this.state.tasks.findIndex(t=> t.id === id)
    const tasks = [...this.state.tasks]
    tasks.splice(taskIndex, 1);

    this.setState({tasks})
  }


  render = () => {
    let newTask = null
    if (this.state.showTasks) {
      newTask = (this.state.tasks.map((task)=>(
        <Task 
          key = {task.id}
          todotext={task.todotext}
          remove={()=> this.removeTask(task.id)}
        />
        ))
      )
    }

    return (
      <div className="container">
        <form className="input">
          <div className="input-group mb-3">
            <input onChange = {this.updateInputValue} type="text" className="form-control" placeholder="Add new task" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <div className="input-group-append">
              <button onClick = {this.addTask} className="btn btn-primary" type="submit" id="button-addon2">ADD</button>
            </div>
          </div>
        </form>
        {newTask}
        {console.log(this.state)}
        </div>
    );
  }
 
}

export default App;
