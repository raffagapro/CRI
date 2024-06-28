/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Register({ title }) {
    const [input, setInput] = useState({
        name:"",
        email:"",
        birthdate:"",
        nDni:"",
        username:"",
        password:""
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        const URL = `http://localhost:3000/users/register`;
        axios.post(URL, input).then(resp=>{
            alert(`User created:${resp.data.id}`)
        }).catch(err=>{
                alert('Bad Credentials')
        });
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
            {/* NAME */}
            <div className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Name" 
                    name="name"
                    onChange={handleChange}
                    value={input.name}  
                />
            </div>

            {/* EMAIL */}
            <div className="form-group">
                <input 
                    type="email"
                    className="form-control"
                    placeholder="Email" 
                    name="email"
                    onChange={handleChange}
                    value={input.email}  
                />
            </div>

            {/* BIRTHDATE */}
            <div className="form-group">
                <input 
                    type="date"
                    className="form-control"
                    placeholder="Birthdate" 
                    name="birthdate"
                    onChange={handleChange}
                    value={input.birthdate}  
                />
            </div>

            {/* NDNI */}
            <div className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="nDni" 
                    name="nDni"
                    onChange={handleChange}
                    value={input.nDni}  
                />
            </div>

            {/* USERNAME */}
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

            {/* PASSWORD */}
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
            <button type="submit" className="btn btn-primary">Register</button>
            <p className="text-center">Return <Link to='/'>HOME</Link></p>
        </form>
    )
}

export default Register;