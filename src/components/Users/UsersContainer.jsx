import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction, toggleFollowStateAction } from "../../redux/users.slice";
import Users from "./Users";

const UsersContainer = (props) => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsersAction());
    }, [dispatch]);

    function toggleFollowState(userId) {
        dispatch(toggleFollowStateAction({ userId }))
    }

    return (
        <Users users={users} toggleFollowState={toggleFollowState} />
    );
}

export default UsersContainer;