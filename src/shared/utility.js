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

    if (rules.required && valid.isValid) {
        valid.isValid = value !== '' && valid.isValid;
        valid.message = valid.isValid ? '' : 'Field Required, not empty allowed';
    }

    if (rules.minLength && valid.isValid) {
        valid.isValid = value.length >= rules.minLength && valid.isValid;
        valid.message = valid.isValid ? '' : `Min length is ${rules.minLength} characters`;
    }

    if (rules.maxLength && valid.isValid) {
        valid.isValid = value.length <= rules.maxLength && valid.isValid;
        valid.message = valid.isValid ? '' : `Max lenght is ${rules.maxLength} characters`;
    }

    if (rules.containEmoji && valid.isValid) {
        valid.isValid = !hasEmoji(value) && valid.isValid;
        valid.message = valid.isValid ? '' : 'It shouldn\'t contain emojis';
    }
    return valid;
}

export function hasEmoji(str) {
    const ranges = [
        '\ud83c[\udf00-\udfff]',
        '\ud83d[\udc00-\ude4f]',
        '\ud83d[\ude80-\udeff]'
    ];
    return str.match(ranges.join('|'))
}

export function capitalizeFirstLetter(string) {
    return string.trim().charAt(0).toUpperCase() + string.trim().slice(1);
}

export function hasErrors(str, rules) {
    const errors = [];
    if (!rules) {
        return errors;
    }
    if (rules.required) {
        str === '' && errors.push('Shouldn’t be empty');
    }

    if (rules.maxLength) {
        str.length >= rules.maxLength && errors.push(`Number of characters shouldn’t exceed ${rules.maxLength}`);
    }

    if (rules.containEmoji) {
        hasEmoji(str) && errors.push('Shouldn’t contain emojis');
    }
    return errors
}

export function delayedProps(props, delay) {
    props.notes.length > this.state.notes.length ?
        setTimeout(() => {
            this.setState({
                ...props
            })
        }, delay) :
        this.setState({
            ...props
        });
}