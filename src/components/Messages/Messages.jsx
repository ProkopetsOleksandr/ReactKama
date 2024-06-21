import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../redux/dialogs.slice';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Messages.module.css';

const DialogForm = (props) => {
    const dialogFormFormik = useFormik({
        initialValues: {
            newMessageBody: '',
        },
        onSubmit: (values) => {
            props.onSubmit(values);
        },
        validate: (values) => {
            const errors = {};

            return errors;
        }
    });

    return (
        <form onSubmit={dialogFormFormik.handleSubmit}>
            <div>
                <textarea id='newMessageBody' name='newMessageBody' rows="3" style={{ width: "100%", boxSizing: "border-box" }}
                    value={dialogFormFormik.values.newMessageBody} onChange={dialogFormFormik.handleChange} onBlur={dialogFormFormik.handleBlur} />
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    )
}

export default function Messages(props) {
    const dispatch = useDispatch();
    const dialogItems = useSelector(state => state.dialogs.dialogItems);
    const messages = useSelector(state => state.dialogs.messages);

    function handleDialogFormSubmit(values) {
        dispatch(sendMessage({ newMessageBody: values.newMessageBody }));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogItems.map(item => <DialogItem key={item.id} id={item.id} name={item.name} />)}
            </div>
            <div className={classes.messages}>
                <div>
                    {messages.map((item, index) => <Message key={index} text={item.text}></Message>)}
                </div>
                <div>
                    <DialogForm onSubmit={handleDialogFormSubmit} />
                </div>
            </div>
        </div>
    );
}