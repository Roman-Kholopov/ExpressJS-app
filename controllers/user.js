const validator = require('validator');
const User = require('../models/User');

async function getUserList(req, res, next) {
    try {
        const user = new User();

        const {data} = await user.fetchUsers();
    
        const userList = data.map((user) => ({
            id: user.id,
            username: user.username,
            email: user.email,
        }));
    
        res.render('user/list', { users: userList });    
    } catch (err) {
        next(err);
    }

}

async function getUserById(req, res, next) {
    try {
        const user = new User();

        const userId = req.params.userId;

        const carrentUser = await user.getUserById(userId);

        console.log(carrentUser);

        res.render('user/user', { user: carrentUser});
    } catch (err) {
        next(err);
    }

}

async function editUserById(req, res, next) {
    try {
        const user = new User();

        const userId = req.params.userId;

        const carrentUser = await user.getUserById(userId);

        // console.log(carrentUser);
        
        res.render('user/edit', { 
            user: carrentUser, 
            title: 'Edit user',
        });
    } catch (err) {
        next(err);
    }

}

async function createUserById(req, res, next) {
    try {
        res.render('user/create');
    } catch (err) {
        next(err);
    }

}


async function editUser(req, res, next) {
    const body = req.body;

    const userId = req.params.userId;


    function validateUser(body) {
        const {username, email, street, city, phone} = body;
        const validUsername = validator.isAlpha(username);
        const validMail = validator.isEmail(email);
        // const validStreet = street ? true : false;
        const validStreet = validator.isAlpha(street);
        const validCity = validator.isAlpha(city);
        const validPhone = phone ? true : false;
        let error = {};
        let flag = true;

        if(!validUsername) {
            error.validUsername = '*Имя*';
            flag = false;
        }
        
        if(!validMail) {
            error.validMail = '*E-mail*';
            flag = false;
        }

        if(!validStreet) {
            error.validStreet = '*Улица*';
            flag = false;
        }

        if(!validCity) {
            error.validCity = '*Город*';
            flag = false;
        }

        if(!validPhone) {
            error.validPhone = '*Телефон*';
            flag = false;
        }

        if(flag) {
            res.render('user/edit_succes', {
                title: 'Edit succes',
                button: 'Go home'
            });
        } else {
            res.render('user/edit_error', {
                title: 'Edit error',
                button: 'Prev',
                userId: userId,
                error: error
            });

            // console.log(error);
        }

        // if(validMail && validUsername && validStreet && validCity && validPhone) {
        //     res.render('user/edit_succes', {
        //         title: 'Edit succes',
        //         button: 'Go home'
        //     });
        // } else {
        //     res.render('user/edit_error', {
        //         title: 'Edit error',
        //         button: 'Prev',
        //         userId: userId
        //     });
        // };
    }

    validateUser(body);

    // const validUsername = body.username.trim() ? true : false;
    // const validUsername = validator.isAlpha(body.username);
    // const validMail = validator.isEmail(body.email);
    // const validStreet = body.street ? true : false;
    // const validStreet = validator.isAlpha(body.street);
    // const validCity = validator.isAlpha(body.city);
    // const validPhone = body.phone ? true : false;
    // const validPhone = validator.isAlphanumeric(body.phone);
    
    // console.log(body);

    // const userId = req.params.userId;

    // console.log(userId);
    // console.log(req.params);

    
    // if(validMail && validUsername && validStreet && validCity && validPhone) {
    //     res.render('user/edit_succes', {
    //         title: 'Edit succes',
    //         button: 'Go home'
    //     });
    // } else {
    //     res.render('user/edit_error', {
    //         title: 'Edit error',
    //         button: 'Prev',
    //         userId: userId
    //     });
    // };
    
};

module.exports.getUserList = getUserList;
module.exports.getUserById = getUserById;
module.exports.editUserById = editUserById;
module.exports.createUserById = createUserById;
module.exports.editUser = editUser;