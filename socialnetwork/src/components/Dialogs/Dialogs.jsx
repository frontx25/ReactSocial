import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props)=> {
    let path = '/dialogs/'+ props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} > {props.name} </NavLink>
        </div>
    )
}

const Message =(props)=> {
    return (
        <div className={s.message}>{props.message}</div>
    )

}


const Dialogs = (props) => {
    return (
        < div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name='Vlad' id='1'/>
                <DialogItem name='Valera' id='2'/>
                <DialogItem name='Maks' id='3'/>
                <DialogItem name='Vano' id='4'/>
            </div>

            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Hello'/>
                <Message message='You'/>
                <Message message='Yes'/>
            </div>
        </div>
    )
}

export default Dialogs