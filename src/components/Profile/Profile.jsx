import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile(props) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}
