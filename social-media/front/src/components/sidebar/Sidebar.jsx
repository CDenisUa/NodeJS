import {
    Bookmark, Chat,
    Event,
    Group,
    HelpOutline,
    PlayCircleFilledOutlined,
    RssFeed,
    School,
    WorkOutline
} from '@material-ui/icons';
import CloseFriends from "../closeFriends/CloseFriends";
import { Users } from '../../dummyData';
import './sidebar.css';

export default function Sidebar() {
    return (
        <div className='side-bar'>
            <div className='side-bar-wrapper'>
                <ul className='side-bar-list'>
                    <li className="side-bar-item">
                        <RssFeed className='side-bar-icon'/>
                        <span className="side-bar-item-text">Feed</span>
                    </li>
                    <li className="side-bar-item">
                        <Chat className='side-bar-icon'/>
                        <span className="side-bar-item-text">Chats</span>
                    </li>
                    <li className="side-bar-item">
                        <PlayCircleFilledOutlined className='side-bar-icon'/>
                        <span className="side-bar-item-text">Videos</span>
                    </li>
                    <li className="side-bar-item">
                        <Group className='side-bar-icon'/>
                        <span className="side-bar-item-text">Groups</span>
                    </li>
                    <li className="side-bar-item">
                        <Bookmark className='side-bar-icon'/>
                        <span className="side-bar-item-text">Bookmarks</span>
                    </li>
                    <li className="side-bar-item">
                        <HelpOutline className='side-bar-icon'/>
                        <span className="side-bar-item-text">Questions</span>
                    </li>
                    <li className="side-bar-item">
                        <WorkOutline className='side-bar-icon'/>
                        <span className="side-bar-item-text">Jobs</span>
                    </li>
                    <li className="side-bar-item">
                        <Event className='side-bar-icon'/>
                        <span className="side-bar-item-text">Events</span>
                    </li>
                    <li className="side-bar-item">
                        <School className='side-bar-icon'/>
                        <span className="side-bar-item-text">Courses</span>
                    </li>
                </ul>
                <button className="side-bar-button">Show More</button>
                <hr className='side-bar-hr'/>
                <ul className="side-bar-friend-list">
                    { Users.map( user => <CloseFriends key={user.id} user={user} />) }
                </ul>
            </div>
        </div>
    );
}
