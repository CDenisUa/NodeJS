import './closeFriends.css';

export default function CloseFriends({ user }) {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="side-bar-friend">
            <img className='side-bar-friend-img' src={ publicFolder + user.profilePicture } alt='side bar friend' />
            <span className='side-bar-friend-name'> { user.username } </span>
        </li>
    )
}
