import "./Login.css";

import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      emailerr: "",
      passworderr: "",
      isvalidemail: false,
      isvalidpass: false,
    };
  }

  changename = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  changepassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  submit = () => {
    console.log("nmae", this.state.name);
    console.log("paass", this.state.password);
    const em_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!this.state.name) {
      // this.state.isvalidemail=true
      this.setState({
        emailerr: "Email field cannot be Empty",
      });
    }
    if (em_regex.test(this.state.name) == false) {
      this.setState({
        emailerr: "Enter a valid email",
        isvalidemail: true,
      });
    }

    if(!this.state.password)
    {
        this.setState({
            passworderr:"Password cannot be Empty",
            isvalidpass:true
        })
    }
    
    else {
      this.setState({
        isvalidemail: false,
        isvalidpass:false
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="innercon">
          <div className="fields">
            <label style={{ marginRight: "30px" }}>Email</label>
            <input type="email" onChange={this.changename}></input>
          </div>
          {this.state.name == "" || this.state.isvalidemail == true ? (
            <div style={{color:"red",marginBottom:"10px"}}>{this.state.emailerr}</div>
          ) : null}
          <div className="fields">
            <label style={{ marginRight: "10px" }}>password</label>
            <input type="password" onChange={this.changepassword}></input>
          </div>

          {this.state.password == "" || this.state.isvalidpass == true ? (
            <div style={{color:"red",marginBottom:"10px"}}>{this.state.passworderr}</div>
          ) : null}

          <div className="fields">
            <button onClick={this.submit}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
