import React, {useState, useEffect} from 'react';
import { AllUsers } from './pages/allUsers';

export function PostForm(props) {

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [image, setImage] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Post
        From ${from}
        To ${to}
        Image ${image}
        Message ${message}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> 
                From:
                <select>
                <input
                    type="text"
                    value={AllUsers.user.username}
                    onChange={e => setFrom(e.target.value)}
                    />
                    </select>
            </label>
            <label> 
                To:
                <select>
                <input
                    type="text"
                    value={AllUsers.user.username}
                    onChange={e => setTo(e.target.value)}
                    />
                    </select>
            </label>
            <label> 
                Image:
                <input
                    type="text"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    />
            </label>
            <label> 
                Message:
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    />
            </label>

            <input type="submit" value="Submit" />
        </form>
    );
}