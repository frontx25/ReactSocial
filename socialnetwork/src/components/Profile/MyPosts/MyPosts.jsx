import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>New post</div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default MyPosts;