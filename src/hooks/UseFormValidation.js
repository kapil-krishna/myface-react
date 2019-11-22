import {useState, useEffect} from 'react';

export function UseFormValidation(initialState, validate) {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                alert(`Uploading...
                `);
                setSubmitting(false);
            } else {
                setSubmitting(false);
            }
        }
    }, [errors])

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    async function getUsernames(event) {
        const query = event.target.value + "%"
        const response = (await fetch("http://localhost:8080/api/users?username=" + query)).json();
        return response;
        }

    function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
        const form = event.target;
        const formData = new FormData(form);     
        fetchData(formData)
            .then(() => setSubmitting(false));
    }

    async function fetchData(formData) {
        var address = ""
        if (values.hasOwnProperty("username")) {
            address = "http://localhost:8080/api/users/create"
        }
        if (values.hasOwnProperty("message")) {
            address = "http://localhost:8080/api/posts/create"
        }
        const response = await fetch(address, {
                    method: 'post', body: formData
            });
        console.log(response);
    }

    return {handleSubmit, handleChange, values, errors, isSubmitting, getUsernames}
}
