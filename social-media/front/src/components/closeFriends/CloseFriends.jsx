import './closeFriends.css';

export default function CloseFriends({ user }) {
    return (
        <li className="side-bar-friend">
            <img className='side-bar-friend-img' src={ user.profilePicture } alt='user-picture' />
            <span className='side-bar-friend-name'> { user.username } </span>
        </li>
    )
}
