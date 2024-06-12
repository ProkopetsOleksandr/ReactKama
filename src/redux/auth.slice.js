import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersAPI from "../api/api";

export const authAction = createAsyncThunk("auth/auth", async function(args) {
    return usersAPI.getCurrentUserData();
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        userId: null,
        email: null,
        login: null,
        isAuthenticated: false
    },
    extraReducers: builder => {
        builder.addCase(authAction.fulfilled, function(state, action) {
            if (action.payload.resultCode !== 0) {
                return;
            }
            
            const data = action.payload.data;

            state.userId = data.id;
            state.email = data.email;
            state.login = data.login;
            state.isAuthenticated = true;
        });
    }
});

export default authSlice.reducer;