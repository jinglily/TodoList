import React from 'react';

import TodoList from './component/TodoList';
import TodoControl from './component/ListControl';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      items:[
        {title:'aaa',completed:false,id:1},
        {title:'bbb',completed:true,id:2}
      ],
      show:0
    }
  }
  handleChange(id){
    let index = this.myFindIndex(id);
    var icon = !this.state.items[index].completed;
    this.state.items[index].completed = icon;
    this.setState(
      {
        items:this.state.items
      }
    )

  }
  handleDel(id){
    let index = this.myFindIndex(id);
    this.state.items.splice(index,1);
    this.setState(
      {
        items:this.state.items
      }
    )
  }
  myFindIndex(id){
    var index = this.state.items.findIndex((ele) =>  id==ele.id)
    return index
  }
  handleSunmit(e){
    e.preventDefault();
    let inputValue = this.refs.input.value.trim(); //trim() 去掉字符串中的空格
    this.refs.input.value = null;
    if (inputValue==''&& !newItem) {
      this.refs.input.focus();
      return alert('输入内容不能为空！')
    }
    let date = new Date()
    let newItem = {title:inputValue,completed:false,id:date.getTime()}
    this.state.items.push(newItem);
    this.setState({
        items:this.state.items
      }
    )
  }
  handleShow(n){
    this.setState({show:n})
  }
  render(){
    if(this.state.show==0){
      var showItems = this.state.items
    }else if(this.state.show==1){
      var showItems = this.state.items.filter( (element) => element.completed==false )
    }else if(this.state.show==2){
      var showItems = this.state.items.filter((element) => element.completed==true )
    }
    return(
    <div>
      <h1>TODO</h1>
      <TodoList handleChange={this.handleChange.bind(this)}
        handleDel={this.handleDel.bind(this)} items={showItems}/>
      <form onSubmit={this.handleSunmit.bind(this)}>
      <input placeholder='add a todo' ref='input'/>
      <button>ADD #{this.state.items.length + 1}</button>
      </form>
      <TodoControl handleShow={this.handleShow.bind(this)} show={this.state.show}/>
    </div>
    )
  }
}
export default App;
