import React from 'react';

const Form = props => (
  <form className="input">
    <div className="input-group my-3">
      <input value={props.value} onChange = {props.change} type="text" className="form-control" placeholder="Add new task"/>
      <div className="input-group-append">
        <button onClick = {props.click} className="btn btn-secondary" type="submit">ADD</button>
      </div>
    </div>
  </form>
)

export default Form;