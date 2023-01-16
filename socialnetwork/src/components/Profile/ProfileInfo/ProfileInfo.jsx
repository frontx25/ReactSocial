import React from "react";
import s from './PrifileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img className={s.back} src="https://cumbia.com.au/wp-content/uploads/2018/01/background-img-1.jpg" alt=""/>
            </div>

            <div className={s.description_block}>
                ava + descr
            </div>
        </div>


    )
}

export default ProfileInfo;