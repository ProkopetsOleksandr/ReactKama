import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersAPI from "../api/api";

export const authAction = createAsyncThunk("auth/auth", function () {
    return usersAPI.getCurrentUserData();
});

export const loginAction = createAsyncThunk("auth/login", async function (payload, { dispatch }) {
    debugger;
    usersAPI.login(payload.email, payload.password, payload.rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authAction());
            }
        });
});

export const logoutAction = createAsyncThunk("auth/logout", function () {
    return usersAPI.logout();
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
        builder.addCase(authAction.fulfilled, function (state, action) {
            if (action.payload.resultCode !== 0) {
                return;
            }

            const data = action.payload.data;

            state.userId = data.id;
            state.email = data.email;
            state.login = data.login;
            state.isAuthenticated = true;
        });

        builder.addCase(logoutAction.fulfilled, function (state, action) {
            if (action.payload.data.resultCode === 0) {
                state.email = null;
                state.userId = null;
                state.login = null;
                state.isAuthenticated = false;
            }
        });
    }
});

export default authSlice.reducer;