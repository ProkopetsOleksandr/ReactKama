import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, updateNewMessageBody } from '../../redux/dialogs.slice';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Messages.module.css';

export default function Messages(props) {
    const dispatch = useDispatch();
    const dialogItems = useSelector(state => state.dialogs.dialogItems);
    const messages = useSelector(state => state.dialogs.messages);
    const newMessageBody = useSelector(state => state.dialogs.newMessageBody);

    function onNewMessageBodyChange(event) {
        dispatch(updateNewMessageBody({ value: event.target.value }));
    }

    function onSendMessageButtonClick() {
        dispatch(sendMessage());
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
                    <textarea rows="3" style={{ width: "100%", boxSizing: "border-box" }} value={newMessageBody} onChange={onNewMessageBodyChange} />
                </div>
                <div>
                    <button onClick={onSendMessageButtonClick}>Send</button>
                </div>
            </div>
        </div>
    );
}