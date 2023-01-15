import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        < div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'> Vlad </NavLink>
                </div>

                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'> Artem </NavLink>
                </div>

                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'> Valera </NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}> Hi!!!</div>
                <div className={s.message}> Lats go</div>
                <div className={s.message}> WOW!!! GM!</div>
            </div>
        </div>
    )
}

export default Dialogs