/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/userReducer";
import { userServices } from "../services/apiServices";

function Login() {
    const dispatch = useDispatch();
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
        userServices('/users/login', input)
        .then(data => dispatch(login(data)))
        .catch(err=>alert(`Mira Otto un error:${err}!`));
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
            <p className="text-center">Not a member? <Link to='/register'>Register now!</Link></p>
        </form>
    )
}

export default Login;