import './login.css';

export default function Login(){
    return (
        <div className='login'>
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo "> Social Media</h3>
                    <span className="login-description"> Connect with friends and the world around you on Social Media from <b>Denys Chepiha</b></span>
                </div>
                <div className="login-right">
                    <div className="login-box">
                        <input placeholder='Email' type="text" className="login-input"/>
                        <input placeholder='Password' type="text" className="login-input"/>
                        <button className="login-button">
                            Log In
                        </button>
                        <span className="login-forgot">Forgot password?</span>
                        <button className="login-register-button">Create a New account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
