import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        postData: [
            { id: 1, message: 'Hello, how are you?', likesCount: 0 },
            { id: 2, message: "It's my first post", likesCount: 23 }
        ],
        newPostValue: ''
    },
    reducers: {
        addPost(state, action) {
            state.postData.push({
                id: 5,
                message: state.newPostValue,
                likesCount: 0
            });

            state.newPostValue = '';
        },
        updateNewPostValue(state, action) {
            state.newPostValue = action.payload.value;
        }
    }
});

export default profileSlice.reducer;
export const { addPost, updateNewPostValue } = profileSlice.actions;