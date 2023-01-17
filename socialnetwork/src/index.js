import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


let postData = [
    {id:1, message: 'Hi bro - 1 ', likesCount:12},
    {id:2, message: 'Hi bro - 2 ', likesCount:14},
    {id:3, message: 'Hi bro - 3 ', likesCount:16},
    {id:4, message: 'Hi bro - 4 ', likesCount:13},
    {id:5, message: 'Hi bro - 5 ', likesCount:16},
    {id:6, message: 'Hi bro - 6 ', likesCount:166}
]

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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

