const User = require('../models/User');

async function getUserList(req, res) {
    const user = new User();

    const {data} = await user.fetchUsers();

    const userList = data.map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
    }));
    console.log(typeof userList);

    res.render('users', { users: userList });

}

module.exports.getUserList = getUserList;