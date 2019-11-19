import React from 'react';

const Task = props => {
  let color;
  let icon = "fas fa-check-square";
  if (props.task.checked) {
    color = ' bg-success';
    icon = "fas fa-check-double";
  }
  return (
    <div  className={`card w-100 mb-3 ${color}`}>
      <div className="card-body d-flex justify-content-between align-items-center">
      <div className="d-flex">
        <button className="close mr-3" onClick={props.check}><i className={icon}></i></button>
        <p className="card-text m-0">{props.task.title}</p>
      </div>
      <button onClick={props.remove} className="close"><i className="fas fa-window-close text-sm"></i></button>
      </div>
    </div>
  )
}

export default Task;