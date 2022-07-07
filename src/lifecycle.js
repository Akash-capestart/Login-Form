import React, { Component } from "react";

class LifeCycleComponents extends Component {
  constructor() {
    console.log("constructor")
    super();
    this.state = {
      name: "Name",
      message:"initial message",
      color:"green",
      unmounting:"btn"
    };
  }

  componentDidMount() {
    console.log("component Did Mount")
    setTimeout(() => {
      this.setState({
        name: "Name changed",
      });
    }, 5000);
  }

  componentWillMount()
  {
    console.log("component Will mount")
    this.setState({
        message:"Updated message from Componetwillmount"
    })
  }


shouldComponentUpdate()
{ 
    console.log("should component update")
    return true
}

changecolor=()=>{
    this.setState({
        color:"yellow"
    })
}


componentWillUnmount()
{
    alert("component is unmounting")

}




  render() {
    console.log("render")
    return (
      <div>
        <h1>Component Did Mount {this.state.name}</h1>
        <h1>Component Will Mount {this.state.message}</h1>
        <h1>Should Component Update {this.state.color}</h1>
        <button onClick={this.changecolor}>Change Color</button>
        ----------------------------------------------------
        <h1></h1>
       </div>
    );
  }
}

export default LifeCycleComponents;
