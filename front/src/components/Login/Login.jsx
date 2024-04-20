const Login = ()=>{
    return(
        <form className="row g-3 mt-4">
            <div className="col-auto">
                <input type="text" className="form-control" name="email" placeholder="email@example.com" />
            </div>
            <div className="col-auto">
                <input type="password" className="form-control" name="password" placeholder="Password" />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Login</button>
            </div>
            <p className="text-center">Not a member? Register now!</p>
        </form>
    )
}

export default Login;