import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = (props) => {
    let postData = [
        {id:1, message: 'Hi bro - 1 ', likesCount:12},
        {id:2, message: 'Hi bro - 2 ', likesCount:14},
        {id:3, message: 'Hi bro - 3 ', likesCount:16},
        {id:4, message: 'Hi bro - 4 ', likesCount:13},
        {id:5, message: 'Hi bro - 5 ', likesCount:16},
        {id:6, message: 'Hi bro - 6 ', likesCount:166}
    ]

    let postsElements = postData.map(p=><Post message={p.message} likesCount={p.likesCount}/>)

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