import "./Login.css";

import React, { Component } from "react";
import { history } from "..";

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

    if(e.target.value)
    {
      this.setState({
        emailerr:""
      })

    }
  };

  changepassword = (e) => {
    this.setState({
      password: e.target.value,
    });

    if(e.target.value)
    {
      this.setState({
        passworderr:""
      })

    }

  };

  submit = () => {
    console.log("nmae", this.state.name);
    console.log("paass", this.state.password);
    const em_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const pass_regex=/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
    // const pass_regex =/^[A-Za-z]\w{7,14}$/
    const pass_regex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    // const pass_regex= /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/
    if (!this.state.name) {
      // this.state.isvalidemail=true
      this.setState({
        emailerr: "Email field cannot be Empty",
      });
    }
   else if (em_regex.test(this.state.name) == false) {
      this.setState({
        emailerr: "Enter a valid email",
        isvalidemail: true,
      });
    }

    else{
      this.setState({
        isvalidemail: false,
      });

    }

    if(!this.state.password)
    {
        this.setState({
            passworderr:"Password cannot be Empty",
            isvalidpass:true
        })
    }

    else if(pass_regex.test(this.state.password)==false)
    {
      this.setState({
        passworderr: "Password Must contain a special char, uppercase, digit",
        isvalidpass: true,
      });

    }
    
    else {
      this.setState({
        isvalidemail: false,
        isvalidpass:false
      });
    history.push('/home')
    document.location.reload()
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
