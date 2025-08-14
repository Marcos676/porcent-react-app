

const originalPriceValidation = ({value, input, setMessage}) => {
    if (value !== "" || value !== 0 ) {
        input.classList.remove("isInvalid");
        input.classList.add("isValid");
        setMessage("");
        return true;
    } else {
        input.classList.remove("isValid");
        input.classList.add("isInvalid");
        setMessage("Se requiere un precio mayor a 0");
        return false;
    }
}

const porcentDiscountValidation = ({value, input, setMessage}) => {
    input.classList.add("isValid");
}

const quantityValidation = ({value, input, setMessage}) => {
    /* ... */
}