import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersAPI from "../api/api";

export const loadProfileAction = createAsyncThunk("profile/loadProfile", function (payload) {
    return usersAPI.getUserProfile(payload.userId);
});

export const loadProfileStatus = createAsyncThunk("profile/loadStatus", function (payload) {
    return usersAPI.getStatus(payload.userId);
});

export const updateProfileStatus = createAsyncThunk("profile/updateStatus", function (payload) {
    return usersAPI.updateStatus(payload.status);
});

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profileData: undefined,
        status: '',
        postData: [
            { id: 1, message: 'Hello, how are you?', likesCount: 0 },
            { id: 2, message: "It's my first post", likesCount: 23 }
        ]
    },
    reducers: {
        addPost(state, action) {
            state.postData.push({
                id: 5,
                message: action.payload.newPostValue,
                likesCount: 0
            });
        }
    },
    extraReducers: builder => {
        builder.addCase(loadProfileAction.fulfilled, function (state, action) {
            state.profileData = action.payload;
        });

        builder.addCase(loadProfileStatus.fulfilled, function (state, action) {
            state.status = action.payload;
        });
    }
});

export default profileSlice.reducer;
export const { addPost } = profileSlice.actions;