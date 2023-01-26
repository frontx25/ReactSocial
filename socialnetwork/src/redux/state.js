const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            postData: [
                {
                    id: 1,
                    message: 'Hi bro - 1 ',
                    likesCount: 12,
                    avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.w1FnkaIdJBDAvGSvCJvjOwHaFW%26pid%3DApi&f=1&ipt=6cb3e03a32f360f11af5200ecd6b2586f91134ea6f778e2f4a3a566a881b0c05&ipo=images'
                },
                {
                    id: 2,
                    message: 'Hi bro - 2 ',
                    likesCount: 14,
                    avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hMhmn8O_JdmWQBPRzckbbgHaHa%26pid%3DApi&f=1&ipt=ecddb176fd01316525034bc3d59822259f11458ef8bc362a4c3a9e31b0e6812f&ipo=images'
                },
                {
                    id: 3,
                    message: 'Hi bro - 3 ',
                    likesCount: 16,
                    avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.R8cbhdRLmUppOu_du39CdQHaHa%26pid%3DApi&f=1&ipt=4bafecda496291bdcb6c0f778691e544c821c11fbe6f8bbb5f7216dd02206f7f&ipo=images'
                },
                {
                    id: 4,
                    message: 'Hi bro - 4 ',
                    likesCount: 13,
                    avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.gZI_bxsIE0XHAYVCouC9XgHaE7%26pid%3DApi&f=1&ipt=f425d1fc850fafeea85f3b96f6eec7fa2798e6fe1ac5f8864773ef1f485669bc&ipo=images'
                },
                {
                    id: 5,
                    message: 'Hi bro - 5 ',
                    likesCount: 16,
                    avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.UMbhhQtWW5jJyxohqqgkmAAAAA%26pid%3DApi&f=1&ipt=9c6b790b42c3e84fb82920c1790216c9c960913c2be86a75e6db0b44af18b6aa&ipo=images'
                },
                {
                    id: 6,
                    message: 'Hi bro - 6 ',
                    likesCount: 166,
                    avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mZ2yNhcS9a14lV1Y9AzLxAAAAA%26pid%3DApi&f=1&ipt=afcc813b9dea599ea9f21f6ca5d223d6acf7e8eabcdba228137dcd94c8c9de79&ipo=images'
                }
            ],
            newPostText: 'cooool',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'hi1'},
                {id: 2, message: 'hi2'},
                {id: 3, message: 'hi3'},
                {id: 4, message: 'hi4'},
                {id: 5, message: 'hi5'},
                {id: 6, message: 'hi6'}
            ],
            dialogs: [
                {id: 1, name: 'Victor'},
                {id: 2, name: 'Vlad'},
                {id: 3, name: 'Sergeu'},
                {id: 4, name: 'Oleg'},
                {id: 5, name: 'Artem'},
                {id: 6, name: 'Vano'}
            ],
        },
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action){
        if (action.type===ADD_POST){
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mZ2yNhcS9a14lV1Y9AzLxAAAAA%26pid%3DApi&f=1&ipt=afcc813b9dea599ea9f21f6ca5d223d6acf7e8eabcdba228137dcd94c8c9de79&ipo=images'
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = ''; /*зануление*/
            this._callSubscriber(this._state)
        } else if (action.type===UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }

}

export const addPostActionCreator = () => {
    return{
        type: ADD_POST
    }
}

export const updateNewPostTextAC = (text) => {
    return{
        type: UPDATE_NEW_POST_TEXT,newText:text
    }
}


export default store