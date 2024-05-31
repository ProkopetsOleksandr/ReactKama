import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction, setUsersPageAction, toggleFollowStateAction } from "../../redux/users.slice";
import Users from "./Users";

const UsersContainer = (props) => {
    const dispatch = useDispatch();
    const { users, currentPage, pageSize, totalUsersCount } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsersAction());
    }, [dispatch]);

    function toggleFollowState(userId) {
        dispatch(toggleFollowStateAction({ userId }))
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
            toggleFollowState={toggleFollowState}
            setUsersPage={setUsersPage} />
    );
}

export default UsersContainer;