import React from 'react';

export function Post(props) {
    return (
        <div>
        <div className="date">{props.data.postedAt}</div>
        <br></br>
        <div className="users">{props.data.sender.username}@{props.data.receiver.username}</div>
        <div className="postImage"><img src={props.data.image} alt="postImage"/></div>
        <div className="postMessage">{props.data.message}</div>
        </div>
    )
}

