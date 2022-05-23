// Сделать модель Для работы с Юзерами
// fetchUsers - запрашивает юзеров
// getUserById - отдает юзера по его id (запрос)
// deleteUserById - удаляет юзера
// updateUserById - обновляет юзера

// По запросу GET /users  надо сделать запрос использовав axios , запросить список юзеров отсюда
// https://jsonplaceholder.typicode.com/ - надо почитать как. Использовать для этого Модель!
// Передать данные в шаблон.
// В шаблоне, получить эти данные и отрисовать список (пока как угодно)

// https://jsonplaceholder.typicode.com/users

const axios = require('axios');

class User {

  async fetchUsers() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      // console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  
  getUserById() {

  }

  deleteUserById() {

  }

  updateUserById() {

  }

}

module.exports = User;