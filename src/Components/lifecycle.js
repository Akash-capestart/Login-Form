import React, { Component } from "react";

class LifeCycleComponents extends Component {
  constructor() {
    console.log("constructor")
    super();
    this.state = {
      name: "Name",
      message:"initial message",
      color:"green",
      show:true
    };
  }

  componentDidMount() {
    console.log("component Did Mount")
    alert("component is mounted")
    // setTimeout(() => {
      this.setState({
        name: "Name changed",
      });
    // }, 5000);
  }

  componentWillMount()
  {
    alert("component is going to mount")
    console.log("component Will mount")
    this.setState({
        message:"Updated message from Componetwillmount"
    })
  }


shouldComponentUpdate()
{ 
    alert("component is updated")
    console.log("should component update")
    return true
}

componentWillUpdate()
{
    alert("component is going to update")
}

componentDidUpdate()
{
    alert("Component has been updated")
}

changecolor=()=>{
    this.setState({
        color:"yellow"
    })
}


delcomp=()=>{
    this.setState({
        show:false
    })
}

// componentWillUnmount()
// {
//     alert("component is unmounting")

// }






  render() {
    console.log("render")
    let heading;
    if(this.state.show)
    {
        heading=<ComponentWillUnmountClass/>

    }
    return (
      <div>
        <h1>Component Did Mount {this.state.name}</h1>
        <h1>Component Will Mount {this.state.message}</h1>
        <h1>Should Component Update {this.state.color}</h1>
        <button onClick={this.changecolor}>Componet update Change Color</button>
        <h1>Componet will unmount</h1>
        {
            heading
        }

        <button onClick={this.delcomp}>unmount</button>
        
        {/* {
            this.state.show?<button onClick={this.delcomp}>Click to unmount</button>:null
        } */}
        
       </div>
    );
  }
}

export default LifeCycleComponents;


class ComponentWillUnmountClass extends React.Component {
 
    // Defining the componentWillUnmount method
    componentWillUnmount() {
      alert('The component is going to be unmounted');
    }
   
    render() {
      return <h1>Hello </h1>;
    }
  }