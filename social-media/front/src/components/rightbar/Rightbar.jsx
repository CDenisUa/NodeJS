import { Users } from '../../dummyData';
import Online from "../online/Online";
import './rightbar.css';

export default function Rightbar() {
    return (
        <div className='right-bar'>
            <div className="right-bar-wrapper">
                <div className="birthday-container">
                    <img src={"assets/gift.png"}  className="birthday-img" alt=""/>
                    <span className="birthday-text">
                        <b>Evgeniy Savitsky</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className='right-bar-ad' src={"assets/ad.png"} alt=""/>
                <h4 className="right-bar-title">Online Friends</h4>
                <ul className="right-bar-friends-list">
                    { Users.map(user => <Online key={user.id} user={user} />) }
                </ul>
            </div>
        </div>
    )
}
