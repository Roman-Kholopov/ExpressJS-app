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

  async getUserById(id) {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  deleteUserById() {
  //TODO: реализация будет позже
  }

  updateUserById() {
  //TODO: реализация будет позже
  }

}

module.exports = User;