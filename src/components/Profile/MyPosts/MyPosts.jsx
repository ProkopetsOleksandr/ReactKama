import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, updateNewPostValue } from '../../../redux/profile.slice';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

export default function MyPosts(props) {
    const dispatch = useDispatch();
    const newPostValue = useSelector(state => state.profile.newPostValue);
    const postData = useSelector(state => state.profile.postData);

    function onAddPostButtonClick() {
        dispatch(addPost());
    }

    function onPostChange(event) {
        dispatch(updateNewPostValue({ value: event.target.value }));
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts:</h3>
            <div>
                <div>
                    <textarea value={newPostValue} onChange={onPostChange} name="post" id="newPost" rows="10" />
                </div>
                <div>
                    <button onClick={onAddPostButtonClick}>Add post</button>
                </div>
            </div>
            <div>
                {postData.map((item, index) => <Post key={index} message={item.message} likesCount={item.likesCount} />)}
            </div>
        </div >
    );
}