import styled from 'styled-components';

const StyledH1 = styled.h1`
    background-color: #007bff; /* Blue */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
`

function Login(props) {
    return(
        <StyledH1>Login</StyledH1>
    )
}

export default Login;