export function ValidatePostFields(values) {
        let errors = {};
        if (!values.from) {
            errors.from = 'Required';
        }
        if (!values.to) {
            errors.to = 'Required';
        }
        if (!values.message) {
            errors.message = 'Required';
        }
        return errors;
}

export function ValidateUserFields(values) {
    let errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    }
    if (!values.username) {
        errors.username = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
    if (!values.username) {
        errors.message = 'Required';
    }
    return errors;
}