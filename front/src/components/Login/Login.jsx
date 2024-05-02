/* eslint-disable react/prop-types */
// import styled from 'styled-components';

import { useState } from "react";

function Login({onlogin}) {
    const [input, setInput] = useState({
        username:'',
        password:''
    });

    const handleChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        onlogin(input);
    }

    return(
        <form className="row g-3 mt-4">
            <div className="col-auto">
                {/* USERNAME */}
                <input 
                    type="text" 
                    className="form-control" 
                    name="username" 
                    placeholder="email@example.com"
                    onChange={handleChange}
                    value={input.username}
                />
            </div>
            <div className="col-auto">
                <input 
                    type="password" 
                    className="form-control" 
                    name="password" 
                    placeholder="Password"
                    onChange={handleChange}
                    value={input.password}
                />
            </div>
            <div className="col-auto">
                <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    onClick={handleSubmit}
                >Login</button>
            </div>
            <p className="text-center">Not a member? Register now!</p>
        </form>
    )
}

export default Login;