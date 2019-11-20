import React from 'react';

export function User(props) {
    return (
        <div>
        <div>{props.data.bannerImage}</div>
        <div>{props.data.profileImage}</div>
        <div>{props.data.username}</div>
        <div>{props.data.firstName}</div>
        <div>{props.data.lastName}</div>
        <div>{props.data.email}</div>
        </div>
    )
}
