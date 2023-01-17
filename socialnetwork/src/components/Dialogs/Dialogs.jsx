import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' '+ s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )

}


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Victor'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Sergeu'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Artem'},
        {id: 6, name: 'Vano'}
    ]

    let messages = [
        {id: 1, message: 'hi1'},
        {id: 2, message: 'hi2'},
        {id: 3, message: 'hi3'},
        {id: 4, message: 'hi4'},
        {id: 5, message: 'hi5'},
        {id: 6, message: 'hi6'}
    ]

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        < div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs