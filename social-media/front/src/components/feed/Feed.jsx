import Share from "../share/Share";
import Post from "../post/Post";
import './feed.css';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);
    const rootApiUrl = process.env.REACT_APP_ROOT_API_FOLDER;
    useEffect( () => {
        (async () => {
            const response = username
                ? await axios.get(`${rootApiUrl}posts/profile/${username}`)
                : await axios.get(`${rootApiUrl}posts/timeline/${user?._id}`);
            setPosts(response.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            }))
        })()

    },[username, user?._id])
    return (
        <div className='feed'>
            <div className="feed-wrapper">
                <Share />
                {
                    posts.map(post => <Post key={post?._id} post={post} />)
                }
            </div>
        </div>
    );
}

