import FormInput from "../FormInput/FormInput";

// eslint-disable-next-line react/prop-types
function Form({ title, handleLogin }) {

    const handleSubmit = (e)=>{
        e.preventDefault()
        handleLogin()
    }
    return(
        <form onSubmit={handleSubmit}>
            <h3>{title}</h3>
            <div className="form-group">
                <FormInput 
                    type="text"
                    placeholder="Username" 
                    name="username"    
                />
            </div>
            <div className="form-group">
                <FormInput 
                    type="password" 
                    placeholder="Password"
                    name="password" 
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form;