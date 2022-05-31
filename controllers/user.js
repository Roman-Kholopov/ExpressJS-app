const User = require('../models/User');

async function getUserList(req, res, next) {
    try {
        const user = new User();

        const {data} = await user.fetchUsers();
    
        const userList = data.map((user) => ({
            username: user.username,
            email: user.email,
        }));
    
        res.render('user/list', { users: userList });    
    } catch (err) {
        next(err);
    }

}


module.exports.getUserList = getUserList;