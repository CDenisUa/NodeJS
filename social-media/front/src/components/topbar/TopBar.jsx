import {Link, NavLink} from 'react-router-dom';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import './topbar.css';

export default function TopBar() {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    return (
        <div className='top-bar-container'>
            <div className='top-bar-left'>
                <Link to="/" className="link">
                    <span className='logo'>Social media</span>
                </Link>
            </div>
            <div className='top-bar-center'>
                <div className='search-bar'>
                    <Search
                        className='search-icon'
                    />
                    <input
                        className='search-input'
                        placeholder='Search...'
                    />
                </div>
            </div>
            <div className='top-bar-right'>
                <span className='top-bar-link'>Homepage</span>
                <span className='top-bar-link'>Timeline</span>
            </div>
            <div className='top-bar-icons'>
                <div className='top-bar-item'>
                    <Person/>
                    <span className='top-bar-badge'>
                        1
                    </span>
                </div>
                <div className='top-bar-item'>
                    <Chat/>
                    <span className='top-bar-badge'>
                        2
                    </span>
                </div>
                <div className='top-bar-item'>
                    <Notifications/>
                    <span className='top-bar-badge'>
                        3
                    </span>
                </div>
            </div>
            <NavLink
                to={`/profile/${user?.username}`}
                className='top-bar-img-wrap'
            >
                <img
                    src={ user?.profilePicture
                        ? user.profilePicture
                        : `${publicFolder}person/noAvatar.jpeg`}
                    className='top-bar-img'
                    alt='top-bar'
                />
            </NavLink>

        </div>
    )
}
