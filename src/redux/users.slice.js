import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersAPI from "../api/api";

export const fetchUsersAction = createAsyncThunk("users/fetchUsers", (payload, { getState }) => {
    const state = getState().users;

    return usersAPI.getUsers(state.currentPage, state.pageSize)
        .then((response) => {
            return response;
        });
});

export const followAction = createAsyncThunk("users/follow", function (payload) {
    return usersAPI.follow(payload.userId)
        .then(response => {
            return payload;
        });
});

export const unfollowAction = createAsyncThunk("users/unfollow", function (payload) {
    return usersAPI.unfollow(payload.userId)
        .then(response => {
            return payload;
        });
});

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        currentPage: 1,
        pageSize: 5,
        totalUsersCount: 0
    },
    reducers: {
        setUsersPageAction(state, action) {
            state.currentPage = action.payload.page;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsersAction.fulfilled, (state, action) => {
            state.users = action.payload.items;
            state.totalUsersCount = action.payload.totalCount;
        });

        builder.addCase(followAction.fulfilled, (state, action) => {
            const user = state.users.find(user => user.id === action.payload.userId);
            if (user) {
                user.followed = !user.followed;
            }
        });

        builder.addCase(unfollowAction.fulfilled, (state, action) => {
            const user = state.users.find(user => user.id === action.payload.userId);
            if (user) {
                user.followed = !user.followed;
            }
        });
    }
});

export default usersSlice.reducer;

export const { setUsersPageAction } = usersSlice.actions;