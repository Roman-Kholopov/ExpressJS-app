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

  async deleteUserById(id) {
    try {
      const response = axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      return response;
    } catch (error) {
      console.error(error);
    }
  }

  updateUserById() {
  //TODO: реализация будет позже
  }

  async createUser(body) {
    try {
      const {username, email, street, city, phone} = body;
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/users', {
      username: username,
      email: email,
      street: street,
      city: city,
      phone: phone
    })

    return data;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = User;