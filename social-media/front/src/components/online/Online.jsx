 import './online.css';

export default function Online ({ user }) {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="right-bar-fiend">
            <div className="right-bar-profile-img-container">
                <img
                    src={ publicFolder + user.profilePicture }
                    className="right-bar-profile-img"
                    alt="right bar profile"
                />
                <span className="right-bar-online " />
            </div>
            <span className="right-bar-username"> { user.username }</span>
        </li>
    )};

