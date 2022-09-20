import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import './login.css';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const { isFetching, dispatch } = useContext(AuthContext)

    const handleClick = (event) => {
        event.preventDefault();
        loginCall({
            email: email.current.value,
            password: password.current.value },
            dispatch)

    }

    return (
        <div className='login'>
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo "> Social Media</h3>
                    <span className="login-description"> Connect with friends and the world around you on Social Media from <b>Denys Chepiha</b></span>
                </div>
                <div className="login-right">
                    <form
                        className="login-box"
                        onSubmit={handleClick}
                    >
                        <input
                            ref={email}
                            required
                            minLength="6"
                            placeholder='Email'
                            type="email"
                            className="login-input"
                        />
                        <input
                            ref={password}
                            required
                            placeholder='Password'
                            type="password"
                            className="login-input"
                        />
                        <button
                            className="login-button"
                            type="submit"
                            disabled={ isFetching }
                        >
                            { isFetching ? <CircularProgress size="30px" color="primary" /> :  "Log In" }
                        </button>
                        <span className="login-forgot">Forgot password?</span>
                        <button
                            onClick={ () => navigate('/register') }
                            className="login-register-button"
                            disabled={ isFetching }
                        >
                            { isFetching ? <CircularProgress size="30px" color="primary" /> :  "Create a New account" }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
