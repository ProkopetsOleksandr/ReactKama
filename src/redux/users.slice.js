import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsersAction = createAsyncThunk("users/fetchUsers", async () => {
    return await axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
            return response.data.items;
        });
});

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        toggleFollowStateAction(state, action) {
            const user = state.users.find(user => user.id === action.payload.userId);
            if (user) {
                user.followed = !user.followed;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsersAction.fulfilled, (state, action) => {
            state.users = action.payload;
        });
    }
});

export default usersSlice.reducer;

export const { toggleFollowStateAction } = usersSlice.actions;