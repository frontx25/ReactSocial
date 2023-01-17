import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (<div className={s.item}>
        <img className={s.ava}
             src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QaivVnzXA8kCtX5v94vLbQAAAA%26pid%3DApi&f=1&ipt=9d028c39d8336b5bb8cd211dbaded52171eccc9f2e2884d5ec6b46179cad7d5d&ipo=images"
             alt="ava"/>
        {props.message}
        <div><img className={s.like} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.iconbird.com%2Fico%2F2013%2F9%2F437%2Fw128h1281379971164thumbup128.png&f=1&nofb=1&ipt=b9cb659dba8078a2575183893095f5286f5f97007b07a574f0b85971ba0bddec&ipo=images" alt=""/>-{props.likesCount}</div>
    </div>)
}

export default Post;