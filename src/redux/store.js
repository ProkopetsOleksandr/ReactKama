import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hello, how are you?', likesCount: 0 },
                { id: 2, message: "It's my first post", likesCount: 23 }
            ],
            newPostValue: ''
        },
        dialogsPage: {
            dialogItems: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Vika' },
                { id: 6, name: 'Valeriy' }
            ],
            messages: [
                { text: 'Hello!' },
                { text: 'Hi!' },
                { text: 'How are you?' }
            ],
            newMessageBody: ''
        },
        sidebar: {

        }
    },
    _callSubscriber(state) {
        console.log('State is changed ', state);
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;