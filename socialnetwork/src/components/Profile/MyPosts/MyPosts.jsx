import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {


    let postsElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}
                                                      avatar={(p.avatar)}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange =()=> {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>New post</div>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}

export default MyPosts;