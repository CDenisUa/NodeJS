import {EmojiEmotions, Label, PermMedia, Room} from '@material-ui/icons';
import {useContext, useRef, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import './share.css';
import axios from "axios";

export default function Share() {
    const { user } = useContext(AuthContext);
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const descriptionRef = useRef();
    const [ file, setFile ] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            description: descriptionRef.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            console.log(newPost);
            try {
                await axios.post("/upload", data);
            } catch (err) {}
        }
        try {
            await axios.post("/posts", newPost);
            // window.location.reload();
        } catch (err) {}
    };

    return (
        <div className='share'>
            <div className="share-wrapper">
                <div className="share-top">
                    <img className='share-profile-img ' src={ user.profilePicture ? user.profilePicture : `${publicFolder}person/noAvatar.jpeg` } alt="" />
                    <input
                        ref={descriptionRef}
                        placeholder={`What's is your mind ${user.username}?`}
                        type="text"
                        className='share-input'
                    />
                </div>
                <hr className='share-hr' />
                <form
                    onSubmit={submitHandler}
                    className="share-bottom"
                >
                    <div className="share-options">
                        <label
                            htmlFor="file"
                            className="share-option"
                        >
                            <PermMedia
                                htmlColor="tomato"
                                className='share-icon'
                            />
                            <span className="share-option-text">Photo or Video</span>
                            <input
                                style={{display: "none"}}
                                id="file"
                                type="file"
                                accept=".png,.jpeg,.jpg"
                                onChange={(event) => setFile(event.target.files[0])}
                            />
                        </label>
                        <div className="share-option">
                            <Label htmlColor="#9CCEFF" className='share-icon' />
                            <span className="share-option-text">Tag</span>
                        </div>
                        <div className="share-option">
                            <Room htmlColor="green" className='share-icon' />
                            <span className="share-option-text">Location</span>
                        </div>
                        <div className="share-option">
                            <EmojiEmotions htmlColor="#929AFF" className='share-icon' />
                            <span className="share-option-text">Feelings</span>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="share-button"
                    >
                        Share
                    </button>
                </form>
            </div>
        </div>
    )
}
