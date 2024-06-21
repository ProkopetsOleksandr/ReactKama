import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction, logoutAction } from "../../redux/auth.slice";
import Header from "./Header";

export default function HeaderContainer(props) {
    const { isAuthenticated, login } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authAction());
    });

    function onLogout() {
        dispatch(logoutAction());
    }

    return (
        <Header {...props} isAuthenticated={isAuthenticated} login={login} onLogout={onLogout} />
    );
}
