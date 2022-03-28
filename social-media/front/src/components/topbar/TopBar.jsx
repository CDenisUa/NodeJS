import {
    Search,
    Person,
    Chat,
    Notifications,
} from '@material-ui/icons';
import './topbar.css';

export default function TopBar() {
    return (
        <div className='top-bar-container'>
            <div className='top-bar-left'>
                <span className='logo'>Social media</span>
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
            <img src={'/assets/person/1.jpeg'} className='top-bar-img' alt=''/>
        </div>
    )
}
