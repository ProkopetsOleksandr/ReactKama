import React, { useEffect } from "react";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { loadProfileAction, loadProfileStatus, updateProfileStatus } from "../../redux/profile.slice";
import { useParams } from "react-router-dom";

export default function ProfileContainer(props) {
    const { userId } = useParams();

    const dispatch = useDispatch();
    const {profileData, status} = useSelector(state => state.profile);

    useEffect(() => {
        dispatch(loadProfileAction({ userId }));
        dispatch(loadProfileStatus({ userId }));
    }, [dispatch, userId]);

    function updateStatus(status) {
        dispatch(updateProfileStatus({status}));
    }

    return (
        <Profile {...props} profileData={profileData} status={status} updateStatus={updateStatus} />
    );
}
