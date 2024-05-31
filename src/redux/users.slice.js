import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsersAction = createAsyncThunk("users/fetchUsers", async (payload, thunkApi) => {
    const state = thunkApi.getState().users;

    return await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${state.currentPage}&count=${state.pageSize}`)
        .then((response) => {
            console.log(response.data);
            return response.data;
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
        toggleFollowStateAction(state, action) {
            const user = state.users.find(user => user.id === action.payload.userId);
            if (user) {
                user.followed = !user.followed;
            }
        },
        setUsersPageAction(state, action) {
            state.currentPage = action.payload.page;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsersAction.fulfilled, (state, action) => {
            state.users = action.payload.items;
            state.totalUsersCount = action.payload.totalCount;
        });
    }
});

export default usersSlice.reducer;

export const { toggleFollowStateAction, setUsersPageAction } = usersSlice.actions;