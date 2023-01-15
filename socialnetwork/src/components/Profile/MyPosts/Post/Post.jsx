import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (<div className={s.item}>
        <img className={s.ava}
             src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QaivVnzXA8kCtX5v94vLbQAAAA%26pid%3DApi&f=1&ipt=9d028c39d8336b5bb8cd211dbaded52171eccc9f2e2884d5ec6b46179cad7d5d&ipo=images"
             alt="ava"/>
        {props.message}
        <div><span>like</span></div>
    </div>)
}

export default Post;