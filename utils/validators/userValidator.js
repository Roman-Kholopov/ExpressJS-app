const validator = require('validator');

function validateUser(body) {
    const {username, email, street, city, phone} = body;
    const validUsername = validator.isLength(username.trim(), {min:2, max: 20});
    const validMail = validator.isEmail(email.trim());
    const validStreet = validator.isLength(street.trim(), {min:2, max: 20});
    const validCity = validator.isAlpha(city.trim());
    const validPhone = validator.isLength(phone.trim(), {min:13, max: 22});
    const errors = [];
    let flag = true;

    if(!validUsername) {
        errors.push({
            field: '*Имя*',
            massage: 'Слишком короткое или слишком длинное имя'    
        })
        flag = false;
    }

    if(!validMail) {
        errors.push({
            field: '*E-mail*',
            massage: 'Некорректный E-mail'    
        })
        flag = false;
    }

    if(!validStreet) {
        errors.push({
            field: '*Улица*',
            massage: 'Слишком короткое или слишком длинное название улицы'
        })
        flag = false;
    }

    if(!validCity) {
        errors.push({
            field: '*Город*',
            massage: 'В поле город допускаются только буквы'    
        })
        flag = false;
    }

    if(!validPhone) {
        errors.push({
            field: '*Телефон*',
            massage: 'Слишком короткий или слишком длинный номер телефона'    
        })
        flag = false;
    }

    return [flag, errors];

};

module.exports = validateUser;