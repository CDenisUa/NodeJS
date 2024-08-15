import { Users } from '../../dummyData';
import Online from "../online/Online";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import './rightbar.css';


export default function RightBar({ user }) {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightBar = () => (
        <>
            <div className="birthday-container">
                <img src={`${publicFolder}gift.png`}  className="birthday-img" alt="birthday"/>
                <span className="birthday-text">
                    <b>Evgeniy Savitsky</b> and <b>3 other friends</b> have a birthday today
                </span>
            </div>
            <img className='right-bar-ad' src={`${publicFolder}ad.png`} alt="advertise"/>
            <h4 className="right-bar-title">Online Friends</h4>
            <ul className="right-bar-friends-list">
                { Users.map(user => <Online key={user.id} user={user} />) }
            </ul>
        </>
    );

    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        (async () => {
            try{
                const friendList = await axios.get(`/users/friends/${user?._id}`);
                setFriends(friendList.data);
            }catch (error) {
                console.log(error)
            }
        })();

    }, [user?._id])
    const ProfileRightBar = () => (
        <>
            <h4 className='right-bar-title'>User information title</h4>
            <div className="right-bar-info">
                <div className="right-bar-info-item">
                    <span className="right-bar-info-key">City:</span>
                    <span className="right-bar-info-value">{ user?.city }</span>
                </div>
                <div className="right-bar-info-item">
                    <span className="right-bar-info-key">From:</span>
                    <span className="right-bar-info-value">{ user?.from }</span>
                </div>
                {
                    user?.relationship && (
                    <div className="right-bar-info-item">
                        <span className="right-bar-info-key">Relationship:</span>
                        <span className="right-bar-info-value">
                           { user.relationship === 1 ? "Single" : "Married" }
                        </span>
                    </div>)
                }
            </div>
            <h4 className='right-bar-title'>User friends</h4>
            { friends.map( (friend, index) => (
                <Link
                    style={{textDecoration: 'none'}}
                    key={friend._id + index}
                    to={`/profile/${ friend.username }`}
                >
                    <div className="right-bar-followings">
                        <div className="right-bar-following">
                            <img
                                src={friend.profilePicture ? friend.profilePicture : `${publicFolder}person/noAvatar.jpeg`}
                                className="right-bar-following-img"
                                alt="following person"
                            />
                            <span className="right-bar-following-name">{ friend.username }</span>
                        </div>
                    </div>
                </Link>
            )) }

        </>
    );

    return (
        <div className='right-bar'>
            <div className="right-bar-wrapper">
                { user ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    )
}
