const User = require('../models/User');

async function getUserList(req, res) {
    const user = new User();

    const {data} = await user.fetchUsers();

    const userList = data.map((user) => ({
        username: user.username,
        email: user.email,
    }));

    res.render('users', { users: userList });

}

module.exports.getUserList = getUserList;