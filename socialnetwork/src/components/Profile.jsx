import React from "react";
import s from'./Prifile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div><img src="https://cumbia.com.au/wp-content/uploads/2018/01/background-img-1.jpg" alt=""/></div>
            <div>
                ava + descr
            </div>
            <div>
                my post
                <div>New post</div>

                <div className={s.posts}>
                    <div className={s.item}>
                        post-1
                    </div>

                    <div className={s.item}>
                        post-2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;