import React from 'react';
import classes from './Post.module.css';

export default function Post(props) {
    return (
        <div className={classes.item}>
            <img src="https://img.freepik.com/free-photo/portrait-of-beautiful-young-brunette-woman-with-clean-face_186202-8459.jpg" alt="profile" />
            {props.message}
            <div>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>
    );
}