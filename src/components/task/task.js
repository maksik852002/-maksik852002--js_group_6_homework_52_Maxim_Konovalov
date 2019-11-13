import React from 'react';

const Task = props => {
  return (
  <div className="card w-100 m-3">
    <div className="card-body d-flex justify-content-between align-items-center">
      <p className="card-text m-0">{props.todotext}</p>
      <button onClick={props.remove} className="btn btn-primary">Remove Task</button>
    </div>
  </div>
  )
}

export default Task;