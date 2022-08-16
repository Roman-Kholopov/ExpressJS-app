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

module.exports.getUserList = getUserList;
module.exports.getUserById = getUserById;