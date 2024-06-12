import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../redux/auth.slice";

export default function HeaderContainer(props) {
    const { isAuthenticated, login } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authAction());
    });

    return (
        <Header {...props} isAuthenticated={isAuthenticated} login={login} />
    );
}
