import { MoreVert } from "@material-ui/icons";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import { format } from 'timeago.js';
import './post.css';
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import {AuthContext} from "../../context/AuthContext";

export default function Post({ post }) {
    const navigate = useNavigate();
    const [like, setLike] = useState(post?.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState([]);
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const rootApiUrl = process.env.REACT_APP_ROOT_API_FOLDER;
    const profilePicture = user.profilePicture || `${publicFolder}person/noAvatar.jpeg`;
    const { user: currentUser } = useContext(AuthContext);
    const likeHandler = () => {
        try{
            axios.put(`/posts/${post._id}/like`,{ userId: currentUser._id })
        }catch(error){
            console.warn(error)
        }
        setLike( isLiked ? like - 1 : like + 1 );
        setIsLiked(!isLiked);
    }

    const dislikeHandler = () => {

    }

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id, post.likes])

    useEffect( () => {
        (async () => {
            const response = await axios.get(`${rootApiUrl}users?userId=${post.userId}`);
            setUser(response.data)
        })()

    },[post.userId, rootApiUrl])
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left" onClick = { () => navigate(`/profile/${user?.username}`) }>
                        <img
                            className={cn('post-profile-img',{'stub': !user.profilePicture})}
                            src={ user.profilePicture
                                ? profilePicture
                                : `${publicFolder}person/noAvatar.png` }
                            alt="post profile"/>
                        <span className='post-user-name'>{ user?.username }</span>
                        <span className='post-user-date'>{ format(post?.createdAt) }</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">{ post?.description }</span>
                    { post?.img && <img className='post-image' src={ publicFolder + post?.img } alt="post"/> }
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img className='like-icon' src={`${publicFolder}like.png`} onClick={likeHandler} alt="like"/>
                        <img className='like-icon' src={`${publicFolder}heart.png`} onClick={likeHandler} alt="like"/>
                        <span className="post-like-counter">{ like } people like it</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">{ post?.comment } comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
