import React from 'react';

import {UseFormValidation} from '../hooks/UseFormValidation';
import {ValidatePostFields} from '../hooks/ValidateFields';

const INITIAL_STATE = {
    from: "",
    to: "",
    image: "",
    message: "",
}

export function PostForm() {
    const {getUsernames, handleSubmit, handleChange, values, errors, isSubmitting} = UseFormValidation(INITIAL_STATE, ValidatePostFields);

    return (
        <div className="PostForm">
        {isSubmitting && <div>Is Submitting</div>}
            <h1>Create a post</h1>
        <form onSubmit={handleSubmit}>
            <label> 
                From-User
                <br></br>
                <input
                    name="senderUsername"
                    type="text"
                    // values={getUsernames.username}
                    // getOptionLabel={option => option.username}
                    onChange={handleChange, getUsernames}
                    className={errors.senderId && 'error-input'}
                    />
                    {errors.senderId && <p className="error-text">{errors.senderId}</p>}
            </label>
            <br></br>
            <label> 
                From:
                <br></br>
                <input
                    name="senderId"
                    type="text"
                    values={values.senderId}
                    onChange={handleChange}
                    className={errors.senderId && 'error-input'}
                    />
                    {errors.senderId && <p className="error-text">{errors.senderId}</p>}
            </label>
            <br></br>
            <label> 
                To:
                <br></br>
                <input
                    name="receiverId"
                    type="text"
                    value={values.receiverId}
                    onChange={handleChange}
                    className={errors.receiverId && 'error-input'}
                    />
                    {errors.receiverId && <p className="error-text">{errors.receiverId}</p>}
            </label>
            <br></br>
            <label> 
                Image URL:
                <br></br>
                <input
                    name="image"
                    type="text"
                    value={values.image}
                    onChange={handleChange}
                    className={errors.image && 'error-input'}
                    />
                    {errors.image && <p className="error-text">{errors.image}</p>}
            </label>
            <br></br>
            <label> 
                Message:
                <br></br>
                <input
                    name="message"
                    type="text"
                    value={values.message}
                    onChange={handleChange}
                    className={errors.message && 'error-input'}
                    />
                    {errors.message && <p className="error-text">{errors.message}</p>}
            </label>
            <br></br>
            <br></br>
            <input type="submit" value="Submit" disabled={isSubmitting} />
        </form>
        </div>
    );
}