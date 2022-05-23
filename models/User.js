const axios = require('axios');

class User {

  async fetchUsers() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  
  getUserById() {
//TODO: реализация будет позже
  }

  deleteUserById() {
//TODO: реализация будет позже
  }

  updateUserById() {
//TODO: реализация будет позже
  }

}

module.exports = User;