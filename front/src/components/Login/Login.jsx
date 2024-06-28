import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Login({ title, handleLogin }) {
    const [input, setInput] = useState({
        username:"",
        password:""
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        handleLogin(input)
    }

    const handleChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <h3>{title}</h3>
            <div className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Username" 
                    name="username"
                    onChange={handleChange}
                    value={input.username}  
                />
            </div>
            <div className="form-group">
                <input 
                    type="password"
                    className="form-control"
                    placeholder="Password" 
                    name="password"
                    onChange={handleChange}
                    value={input.password}  
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <p className="text-center">Not a member? <Link to='/register'>Register now!</Link></p>
        </form>
    )
}

export default Login;