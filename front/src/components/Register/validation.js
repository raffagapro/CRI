export default function validation(input){
    const errors = {};
    //magio de elfos
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexpassword =  /^(?=\w*\d)\S{6,10}$/;
    const regexnumber =  /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i

    //NAME no puede etsra vacio
    if (!input.name) errors.name = 'Name is empty!';

    //EMAIL VALIDATION
    if (!input.email) errors.email = 'Email is empty!';
    if (!regexEmail.test(input.email)) errors.email = 'Email should have proper format!';
    if (input.username.length > 35) errors.email = 'Email max characters is 35';

    //nDni no puede etsra vacio
    if (!input.nDni) errors.nDni = 'nDni is empty!';

    //username no puede etsra vacio
    if (!input.username) errors.username = 'Username is empty!'

    //password
    if (!input.password) errors.password = 'password is empty!';
    if (!regexnumber.test(input.password)) errors.password = "Password must have 1 number";
    if (!regexpassword.test(input.password)) errors.password = "Password must be between 6 and 10 characters";

    //confirmed password
    if (input.password !== input.cPassword) errors.cPassword = 'password & password confirmation does not match!';

    return errors;
}