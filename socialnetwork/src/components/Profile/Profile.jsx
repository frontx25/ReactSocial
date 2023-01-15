import React from "react";
import s from './Prifile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (

        <div >
            <div><img className={s.back} src="https://cumbia.com.au/wp-content/uploads/2018/01/background-img-1.jpg" alt=""/></div>
            <div>
                ava + descr
            </div>
            <MyPosts/>
        </div>


    )
}

export default Profile;