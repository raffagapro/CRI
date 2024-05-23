import { useEffect, useState } from "react";
import validation from "./validation";
import styles from './register.module.css';
import { useNavigate } from "react-router-dom";
import { userServices } from "../services/apiServices";
const { warning } = styles;

function Register() {
    const [input, setInput] = useState({
        name:'',
        email:'',
        birthdate:'',
        nDni:'',
        username:'',
        password:'',
        cPassword:''
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (e)=>{
        //validamos
        setErrors(validation({
            ...input,
            [e.target.name]:e.target.value
        }));

        //luego pasamos input
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        //fix redirect when register failed!!!!
        userServices('/users/register', input) && navigate('/');
    }

    useEffect(()=>{
        const initialErr = {};
        setErrors(initialErr);
    }, [])

    return(
        <form className="row g-3 mt-4">
            <h1>Register</h1>

            {/* NAME */}
            <div className="col-auto">
                <input 
                    type="text" 
                    className='form-control'
                    name="name" 
                    placeholder="Name"
                    value={input.name}
                    onChange={handleChange}
                />
                { errors.name ? <span className={warning}>{errors.name}</span>: undefined}

            </div>

            {/* EMAIL */}
            <div className="col-auto">
                <input 
                    type="text" 
                    className="form-control" 
                    name="email" 
                    placeholder="something@gmail.com"
                    value={input.email}
                    onChange={handleChange}
                />
                { errors.email ? <span className={warning}>{errors.email}</span>: undefined}
            </div>

            {/* BIRTHDAY */}
            <div className="col-auto">
                <input 
                    type="date" 
                    className="form-control" 
                    name="birthdate" 
                    placeholder="birthdate"
                    value={input.birthdate}
                    onChange={handleChange}
                />
                { errors.birthdate ? <span className={warning}>{errors.birthdate}</span>: undefined}

            </div>

            {/* nDNI */}
            <div className="col-auto">
                <input 
                    type="text" 
                    className="form-control" 
                    name="nDni" 
                    placeholder="ID number"
                    value={input.nDni}
                    onChange={handleChange}
                />
                { errors.nDni ? <span className={warning}>{errors.nDni}</span>: undefined}

            </div>

            {/* USERNAME */}
            <div className="col-auto">
                <input 
                    type="text" 
                    className="form-control" 
                    name="username" 
                    placeholder="Username"
                    value={input.username}
                    onChange={handleChange}
                />
                { errors.username ? <span className={warning}>{errors.username}</span>: undefined}

            </div>

            {/* PASSWORD */}
            <div className="col-auto">
                <input 
                    type="password" 
                    className="form-control" 
                    name="password" 
                    placeholder="Password"
                    value={input.password}
                    onChange={handleChange}
                />
                { errors.password ? <span className={warning}>{errors.password}</span>: undefined}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="col-auto">
                <input 
                    type="password" 
                    className="form-control" 
                    name="cPassword" 
                    placeholder="Confirm Password"
                    value={input.cPassword}
                    onChange={handleChange}
                />
                { errors.cPassword ? <span className={warning}>{errors.cPassword}</span>: undefined}
            </div>


            <div className="col-auto">
                <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    onClick={handleSubmit}
                    disabled={Object.keys(errors).length > 0}
                >Register</button>
            </div>
        </form>
    )
}

export default Register;