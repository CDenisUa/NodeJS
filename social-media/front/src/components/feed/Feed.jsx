import { Posts } from "./../../dummyData";
import Share from "../share/Share";
import Post from "../post/Post";
import './feed.css';

export default function Feed() {
    return (
        <div className='feed'>
            <div className="feed-wrapper">
                <Share />
                {
                    Posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    );
}

