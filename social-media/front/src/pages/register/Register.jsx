import './register.css';

export default function Register(){
    return (
        <div className='login'>
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo "> Social Media</h3>
                    <span className="login-description"> Connect with friends and the world around you on Social Media from <b>Denys Chepiha</b></span>
                </div>
                <div className="login-right">
                    <div className="login-box">
                        <input placeholder='Username' type="text" className="login-input"/>
                        <input placeholder='Email' type="text" className="login-input"/>
                        <input placeholder='Password' type="text" className="login-input"/>
                        <input placeholder='Password Again' type="text" className="login-input"/>
                        <button className="login-button">
                            Sign Up
                        </button>
                        <button className="login-register-button">Log Into Account</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
