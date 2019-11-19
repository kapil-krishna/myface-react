import React, {Component} from 'react';

export function Post(props) {
    return (
        <div>
        <div>{props.data.postedAt}</div>
        <div>{props.data.sender.username}@{props.data.receiver.username}</div>
        <div>{props.data.image}</div>
        <div>{props.data.message}</div>
        </div>
    )
}

