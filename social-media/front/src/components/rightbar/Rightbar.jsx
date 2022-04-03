import { Users } from '../../dummyData';
import Online from "../online/Online";
import './rightbar.css';

export default function Rightbar({ user }) {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const userRelationship = () => {
        switch (user.relationship){
            case undefined:
                return ' --- '
            case 1:
                return 'Single'
            default:
                return 'Married'
        }
    }
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
            <div className="right-bar-followings">
                <div className="right-bar-following">
                    <img src={`${publicFolder}person/1.jpeg`} className="right-bar-following-img" alt="following person"/>
                    <span className="right-bar-following-name">John Carter</span>
                </div>
                <div className="right-bar-following">
                    <img src={`${publicFolder}person/2.jpeg`} className="right-bar-following-img" alt="following person"/>
                    <span className="right-bar-following-name">John Carter</span>
                </div>
                <div className="right-bar-following">
                    <img src={`${publicFolder}person/3.jpeg`} className="right-bar-following-img" alt="following person"/>
                    <span className="right-bar-following-name">John Carter</span>
                </div>
                <div className="right-bar-following">
                    <img src={`${publicFolder}person/4.jpeg`} className="right-bar-following-img"  alt="following person"/>
                    <span className="right-bar-following-name">John Carter</span>
                </div>
                <div className="right-bar-following">
                    <img src={`${publicFolder}person/5.jpeg`} className="right-bar-following-img" alt="following person"/>
                    <span className="right-bar-following-name">John Carter</span>
                </div>
            </div>
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
