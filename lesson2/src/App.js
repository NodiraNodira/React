import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Component } from "react";
export default class App extends Component {

  constructor(props){
    super(props)
    //console.log('constructor');
    this.state ={
      count:0,
      title:"Salom"
    }
  }

  render(){

  //   const increment = ()=>{
  //     if(this.state.count<15){
  //     this.setState({count:this.state.count+1})
  //   }
  // }

  //   const decrement =()=>{
  //     if(this.state.count>0){
  //     this.setState({count:this.state.count-1})
  //   }
  // }


  // const getValue =(e)=>{
  //   console.log(e.target.value);
  //   this.setState({title: e.target.value})
  // }


  // const onSelect =(e)=>{
  //   console.log(e);
  // }

  const onChecking =(e)=>{
    console.log(e);
  }



    return(
      <div style={{display:'flex'}}>
        {/* <button onClick={increment}>increment</button>
        <h1>{this.state.count}</h1>
        <button onClick={decrement}>decrement</button> */}


        {/* 2-yurgizish usuli */}
        {/* <button onClick={()=>increment()}>increment</button>
        <h1>{this.state.count}</h1>
        <button onClick={()=>decrement()}>decrement</button> */}




        {/* 3-yurgizish usuli.Agar bu usuldan foydalansak
         yuqoridagi funksiyalarni yozmasak ham bo'ladi */}
         {/* <button onClick={()=>this.setState({count:this.state.count+1})}>increment</button>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count-1})}>decrement</button> */}



        {/* <input onChange={getValue} type="text" placeholder="Enter your name"/>
        <button >Click</button>
        <h1>{this.state.title}</h1> */}


        {/* <select onChange={onSelect} >
          <option>Uzb</option>
          <option>Rus</option>
          <option>Eng</option>
        </select> */}

        <input onChange={onChecking} type="checkbox"/>


      </div>
    )
  }
}

