import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>New post</div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                    </div>
            </div>

            <div className={s.posts}>
                <Post message='Hi bro!!! '/>
                <Post message='Norm '/>
            </div>

        </div>
    )
}

export default MyPosts;