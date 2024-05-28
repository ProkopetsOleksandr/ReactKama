import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogs.slice";
import profileReducer from "./profile.slice";
import usersReducer from "./users.slice";

export default configureStore({
    reducer: {
        profile: profileReducer,
        dialogs: dialogsReducer,
        users: usersReducer
    }
});