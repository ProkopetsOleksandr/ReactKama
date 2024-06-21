import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../../redux/profile.slice';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const NewPostForm = (props) => {
    const newPostFormFormik = useFormik({
        initialValues: {
            newPostValue: ''
        },
        onSubmit: function (values) {
            props.onSubmit(values);
        },
        validate: function (values) {
            const errors = {};

            return errors;
        }
    });

    return (
        <form onSubmit={newPostFormFormik.handleSubmit}>
            <div>
                <textarea id="newPostValue" name="newPostValue" rows="3" style={{ width: "100%", boxSizing: "border-box" }}
                    value={newPostFormFormik.values.newPostValue} onChange={newPostFormFormik.handleChange} />
            </div>
            <div>
                <button type="submit">Add post</button>
            </div>
        </form>
    )
}

export default function MyPosts(props) {
    const dispatch = useDispatch();
    const postData = useSelector(state => state.profile.postData);

    function handleNewPostFormSubmit(values) {
        dispatch(addPost({ newPostValue: values.newPostValue }));
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts:</h3>
            <div>
                <NewPostForm onSubmit={handleNewPostFormSubmit} />
            </div>
            <div>
                {postData.map((item, index) => <Post key={index} message={item.message} likesCount={item.likesCount} />)}
            </div>
        </div >
    );
}