import React from 'react';

class TodoControl extends React.Component{
  handleShow(n){
    this.props.handleShow(n)
  }
  render(){
    let name = ['ALL','Active','Completed'];
    let button = name.map((item,i) =>
      <button onClick={this.handleShow.bind(this,i)}
          style={this.props.show==i ? {backgroundColor:'blue'} : null} key={i}>{item}</button>
    )
    return(
      <div>
      {button}
      </div>
    )
  }
}


export default TodoControl;
