import React,{Component} from "react";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      message: "",
      newValue:""
    }
  }

  render(){

    const onChange =(e)=>{
      this.setState({message: e.target.value});
    }

    const getValue=()=>{
      this.setState({newValue: this.state.message});
      this.setState({message:""});//buni yozmasak button bosilganda messagedagi ma'lumot o'chmaydi
    }
    return(
      <div>
        <input onChange={onChange}/>
        <h1>Message:{this.state.message}</h1>
        <h1>Value:{this.state.newValue}</h1>
        <button onClick={getValue}>GetValue</button>
      </div>
    )
  }
}
