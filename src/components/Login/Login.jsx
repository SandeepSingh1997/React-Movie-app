import React from "react";
import "./Login.css"

const Login = (props)=>{

    return (
        <div>
            <div className="opaque-black-background"></div>
            <div className="flex-container">
                <h2 className="login">Login</h2>
            
                <form className="form-flex-container">
                    <input name="username" className="input" type="text" placeholder="username"/>
                    <input name="password" className="input" type="password" placeholder="password"/>
                </form>
           
                <button className="login-btn">login</button>

                <button className="close-btn" onClick={()=>props.setShowLogin(false)}>close</button>
            </div>
        </div>
    )
}

export default Login;