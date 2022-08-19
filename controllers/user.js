const User = require('../models/User');
const userValidator = require('../utils/validators/userValidator')

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
    try {
        const body = req.body;

        const userId = req.params.userId;

        const {isValid, errors} = userValidator(body);

        if(isValid) {
            res.render('user/edit_succes');
        } else {
            res.render('user/edit_error', {
                userId: userId,
                errors: errors
            });
        }
    
    } catch (err) {
        next(err);
    }
    
};

module.exports.getUserList = getUserList;
module.exports.getUserById = getUserById;
module.exports.editUserById = editUserById;
module.exports.createUserById = createUserById;
module.exports.editUser = editUser;