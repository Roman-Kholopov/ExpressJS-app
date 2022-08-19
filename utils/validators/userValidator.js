const validator = require('validator');
const trimStr = require('../trims/trimStrInObj');

function validateUser(body) {

    const trimObj = trimStr(body);

    const {username, email, street, city, phone} = trimObj;
    const validUsername = validator.isLength(username, {min:2, max: 20});
    const validMail = validator.isEmail(email);
    const validStreet = validator.isLength(street, {min:2, max: 20});
    const validCity = validator.isAlpha(city);
    const validPhone = validator.isLength(phone, {min:13, max: 22});

    const errors = [];

    if(!validUsername) {
        errors.push({
            field: '*Имя*',
            massage: 'Слишком короткое или слишком длинное имя'    
        })
    }

    if(!validMail) {
        errors.push({
            field: '*E-mail*',
            massage: 'Некорректный E-mail'    
        })
    }

    if(!validStreet) {
        errors.push({
            field: '*Улица*',
            massage: 'Слишком короткое или слишком длинное название улицы'
        })
    }

    if(!validCity) {
        errors.push({
            field: '*Город*',
            massage: 'В поле город допускаются только буквы'    
        })
    }

    if(!validPhone) {
        errors.push({
            field: '*Телефон*',
            massage: 'Слишком короткий или слишком длинный номер телефона'    
        })
    }

    return {
        errors,
        isValid: errors.length ? false : true,
      }

};

module.exports = validateUser;