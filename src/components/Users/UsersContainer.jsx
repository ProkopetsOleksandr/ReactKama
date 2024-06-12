import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction, followAction, setUsersPageAction, unfollowAction } from "../../redux/users.slice";
import Users from "./Users";

const UsersContainer = (props) => {
    const dispatch = useDispatch();
    const { users, currentPage, pageSize, totalUsersCount } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsersAction());
    }, [dispatch]);

    function follow(userId) {
        dispatch(followAction({ userId }));
    }

    function unfollow(userId) {
        dispatch(unfollowAction({ userId }));
    }

    function setUsersPage(page) {
        dispatch(setUsersPageAction({ page }));
        dispatch(fetchUsersAction());
    }

    return (
        <Users users={users}
            currentPage={currentPage}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            follow={follow}
            unfollow={unfollow}
            setUsersPage={setUsersPage} />
    );
}

export default UsersContainer;