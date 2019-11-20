import React from 'react';

import {UseFormValidation} from '../hooks/UseFormValidation';
import {ValidatePostFields} from '../hooks/ValidateFields';

const INITIAL_STATE = {
    from: "",
    to: "",
}

export function PostForm() {
    const {handleSubmit, handleChange, values, handleBlur, errors, isSubmitting} = UseFormValidation(INITIAL_STATE, ValidatePostFields);

    return (
        <div className="PostForm">
            <h1>Create a post</h1>
        <form onSubmit={handleSubmit}>
            <label> 
                From:
                <br></br>
                <input
                    name="from"
                    type="text"
                    value={values.from}
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.from && 'error-input'}
                    />
                    {errors.from && <p className="error-text">{errors.from}</p>}
            </label>
            <br></br>
            <label> 
                To:
                <br></br>
                <input
                    name="to"
                    type="text"
                    value={values.to}
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.to && 'error-input'}
                    />
                    {errors.to && <p className="error-text">{errors.to}</p>}
            </label>
            <br></br>
            <label> 
                Image URL:
                <br></br>
                <input
                    name="image"
                    type="text"
                    value={values.image}
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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