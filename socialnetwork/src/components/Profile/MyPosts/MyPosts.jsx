import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = (props) => {


    let postsElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} avatar={(p.avatar)}/>)

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
                {postsElements}
            </div>

        </div>
    )
}

export default MyPosts;