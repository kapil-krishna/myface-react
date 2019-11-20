import React from 'react';

import {UseFormValidation} from '../hooks/UseFormValidation';
import {ValidateUserFields} from '../hooks/ValidateFields';

const INITIAL_STATE = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    profileImage: "",
    bannerImage: ""
}

export function UserForm() {
    const {handleSubmit, handleChange, values, handleBlur, errors, isSubmitting} = UseFormValidation(INITIAL_STATE, ValidateUserFields);

    return (
        <div className="PostForm">
            <h1>Create a new user</h1>
        <form onSubmit={handleSubmit}>
            <label> 
                Username:
                <br></br>
                <input
                    name="username"
                    type="text"
                    value={values.username}
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.username && 'error-input'}
                    />
                    {errors.username && <p className="error-text">{errors.username}</p>}
            </label>
            <br></br>
            <label> 
                First name:
                <br></br>
                <input
                    name="firstName"
                    type="text"
                    value={values.firstName}
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.firstName && 'error-input'}
                    />
                    {errors.firstName && <p className="error-text">{errors.firstName}</p>}
            </label>
            <br></br>
            <label> 
                Last name:
                <br></br>
                <input
                    name="lastName"
                    type="text"
                    value={values.lastName}
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.lastName && 'error-input'}
                    />
                    {errors.lastName && <p className="error-text">{errors.lastName}</p>}
            </label>
            <br></br>
            <label> 
                Email:
                <br></br>
                <input
                    name="email"
                    type="text"
                    value={values.email}
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && 'error-input'}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
            </label>
            <br></br>
            <label> 
                Profile Image URL:
                <br></br>
                <input
                    name="profileImage"
                    type="text"
                    value={values.profileImage}
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.profileImage && 'error-input'}
                    />
                    {errors.profileImage && <p className="error-text">{errors.profileImage}</p>}
            </label>
            <br></br>
            <label> 
                Banner Image URL:
                <br></br>
                <input
                    name="bannerImage"
                    type="text"
                    value={values.bannerImage}
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.bannerImage && 'error-input'}
                    />
                    {errors.bannerImage && <p className="error-text">{errors.bannerImage}</p>}
            </label>
            <br></br>
            <input type="submit" value="Submit" disabled={isSubmitting} />
        </form>
        </div>
    );
}