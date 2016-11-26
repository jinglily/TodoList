import React from 'react';

class TodoControl extends React.Component{
  handleShow(n){
    this.props.handleShow(n)
  }
  render(){
    return(
      <div>
      <button onClick={this.handleShow.bind(this,0)}>ALL</button>
      <button onClick={this.handleShow.bind(this,1)}>Active</button>
      <button onClick={this.handleShow.bind(this,2)}>Completed</button>
      </div>
    )
  }
}


export default TodoControl;
