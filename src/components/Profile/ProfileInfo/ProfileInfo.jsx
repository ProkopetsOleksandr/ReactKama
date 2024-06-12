import React from "react";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

export default function ProfileInfo({ profileData, status, updateStatus }) {

    if (!profileData) {
        return <div>Loadig...</div>
    }

    return (
        <div>
            {/* <div>
                <img src="https://c0.wallpaperflare.com/preview/282/489/126/beach-exotic-holiday-horizon.jpg" alt="sea" />
            </div> */}  

            <div className={classes.descriptionBlock} style={{ display: 'flex', gap: '20px' }}>
                <img src={profileData.photos.large} alt="ava" />

                <div>
                    <div>User Id: {profileData.userId}</div>
                    <div>Fullname: {profileData.fullName}</div>
                    <div>Looking for a job: { profileData.lookingForAJob ? "Yes" : "No" }</div>
                    {profileData.lookingForAJob && <div>Job description: {profileData.lookingForAjobDescription ?? 'N/A'}</div>}
                    <div>About me: {profileData.aboutMe}</div>
                    <br />
                    <hr />
                    <br />
                    <div>Contact information:</div>
                    <div>Facebook: {profileData.facebook}</div>
                    <div>VK: {profileData.vk}</div>
                    <div>Twitter: {profileData.twitter}</div>
                    <div>Instagram: {profileData.instagram}</div>
                    <div>Github: {profileData.github}</div>
                </div>
            </div>

            <div>
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </div>
    );
}
