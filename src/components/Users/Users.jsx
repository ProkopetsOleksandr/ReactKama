import React from "react";
import defaultLogo from '../../assets/images/logo.svg';
import classes from './Users.module.css';

const Users = ({ users, toggleFollowState }) => {
    return (
        <div>
            <div>USERS:</div>
            {users.map(user => {
                return <div key={user.id}>
                    <div>
                        <div>
                            <img src={user.photos.small ?? defaultLogo} alt="account" className={classes.userPhoto} />
                        </div>
                        <div>
                            <button onClick={() => toggleFollowState(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>Ukraine</div>
                            <div>Nova Kakhovka</div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
}

export default Users;