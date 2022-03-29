import './online.css';

export default function Online ({ user }) {
    return (
        <li className="right-bar-fiend">
            <div className="right-bar-profile-img-container">
                <img
                    src={ user.profilePicture }
                    className="right-bar-profile-img"
                    alt="profile-img"
                />
                <span className="right-bar-online " />
            </div>
            <span className="right-bar-username"> { user.username }</span>
        </li>
    )};

