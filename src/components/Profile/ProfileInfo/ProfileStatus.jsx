import React, { useEffect, useState } from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState('');

    const onBlur = (e) => {
        setEditMode(false);
        props.updateStatus(e.target.value);
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    if (editMode) {
        return (
            <div>
                <input value={status} onChange={(e) => setStatus(e.target.value)} autoFocus={true} onBlur={onBlur} />
            </div>
        );
    }

    return (
        <div>
            <span onDoubleClick={() => setEditMode(true)}>{status || '-------'}</span>
        </div>
    );
}

export default ProfileStatus;