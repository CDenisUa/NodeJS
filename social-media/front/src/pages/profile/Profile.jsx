import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cn from 'classnames';
import axios from "axios";
import './profile.css';

export default function Profile() {
    const [user, setUser] = useState({});
    const { username } = useParams();
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        (async() => {
            const res = await axios.get(`/users?username=${ username }`)
            setUser(res.data)
        })()
    },[username])

    return (
        <>
            <TopBar />
            <div className="profile-container">
                <Sidebar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img
                                className='profile-cover-img'
                                src={ user.coverPicture || `${publicFolder}post/3.jpeg`}
                                alt="profile"
                            />
                            <img
                                className={cn('profile-user-img ',{ 'stub-profile': !user.profilePicture })}
                                src={ user.profilePicture || `${publicFolder}person/noAvatar.jpeg`}
                                alt="profile"
                            />
                        </div>
                    </div>
                    <div className="profile-info">
                        <h4 className="profile-info-name">{ user?.username }</h4>
                        <span className="profile-info-description">{ user?.description }</span>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed username={ username }/>
                        <Rightbar user={ user }  />
                    </div>
                </div>
            </div>
        </>
    )
}
