import React from "react";
import s from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a href={undefined} > Profile</a>
            </div>
            <div className={s.item}>
                <a href={undefined}>Massages</a>
            </div>

            <div className={s.item}>
                <a href={undefined}>News</a>
            </div>
            <div className={s.item}>
                <a href={undefined}>Music</a>
            </div>
            <div className={s.item}>
                <a href={undefined}>Settings</a>
            </div>
        </nav>

    )
}

export default Navbar;