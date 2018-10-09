export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidity = (value, rules) => {
    let valid = {
        isValid: true,
        message: ''
    };

    if (!rules) {
        return true;
    }

    if (rules.required) {
        valid.isValid = value.trim() !== '' && valid.isValid;
        valid.message = valid.isValid ? '' : 'Field Required';
    }

    if (rules.minLength) {
        valid.isValid = value.length >= rules.minLength && valid.isValid;
        valid.message = valid.isValid ? '' : 'Min length is ' + rules.minLength;
    }

    if (rules.maxLength) {
        valid.isValid = value.length <= rules.maxLength && valid.isValid;
        valid.message = valid.isValid ? '' : 'Min lenght is ' + rules.maxLength;
    }

    return valid;
}

export function delayedProps(props, delay){
    props.notes.length > this.state.notes.length ?
        setTimeout(() => {
            this.setState({
                notes: props.notes
            })
        }, delay) :
        this.setState({
            notes: props.notes
        });
}