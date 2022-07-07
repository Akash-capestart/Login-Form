import React,{Component} from "react";
import {Link} from "react-router-dom"

class Dashboard extends Component
{
    render()
    {
        return(
            <div>
                <h1>Dashboard page</h1>
                
                    <Link to='login'>Login Page</Link>
                    <Link to='lifecycle'>Life cycle Component</Link>
            </div>
        )
    }
}

export default Dashboard