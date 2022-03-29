import { Users } from './../../dummyData';
import {MoreVert} from "@material-ui/icons";
import './post.css';

export default function Post({ post }) {
    const userName = Users.filter( user => user.id === post.id)[0].username;
    const userAvatar = Users.filter( user => user.id === post.id)[0].profilePicture;

    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className='post-profile-img' src={userAvatar} alt=""/>
                        <span className='post-user-name'>{ userName }</span>
                        <span className='post-user-date'>{ post.date }</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">{ post?.desc }</span>
                    <img className='post-image' src={ post?.photo } alt="post-photo"/>
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img className='like-icon' src={"assets/like.png"} alt=""/>
                        <img className='like-icon' src={"assets/heart.png"} alt=""/>
                        <span className="post-like-counter">{ post?.like } people like it</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">{ post?.comment } comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
