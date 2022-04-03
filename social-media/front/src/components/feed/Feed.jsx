import Share from "../share/Share";
import Post from "../post/Post";
import './feed.css';
import {useEffect, useState} from "react";
import axios from "axios";

export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);
    const rootApiUrl = process.env.REACT_APP_ROOT_API_FOLDER;
    useEffect( () => {
        (async () => {
            const response = username
                ? await axios.get(`${rootApiUrl}posts/profile/${username}`)
                : await axios.get(`${rootApiUrl}posts/timeline/6249de262eff4c1ac92d8950`);
            setPosts(response.data)
        })()

    },[])
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

