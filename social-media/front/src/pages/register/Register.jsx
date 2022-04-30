import './register.css';
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register(){
    const userName = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (event) => {
        event.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Password don't match!")
        }else {
            const user = {
                username: userName.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                await axios.post("/auth/register", user);
                navigate("/login");
            } catch (error){
                console.warn(error);
            }
        }
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
                        onSubmit={handleClick}
                        className="login-box"
                    >
                        <input
                            ref={userName}
                            required
                            placeholder='Username'
                            type="text"
                            className="login-input"
                        />
                        <input
                            ref={email}
                            required
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
                            minLength="6"
                        />
                        <input
                            ref={passwordAgain}
                            required
                            placeholder='Password Again'
                            type="password"
                            className="login-input"
                        />
                        <button
                            type="submit"
                            className="login-button"
                        >
                            Sign Up
                        </button>
                        <button
                            onClick={() => navigate('/login')}
                            className="login-register-button"
                        >
                            Log Into Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
