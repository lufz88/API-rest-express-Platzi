const { faker } = require('@faker-js/faker');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 10; // si no viene size, asigna 10
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
      });
    }
  }

  async find() {
    return this.users;
  }

  async findOne(pid) {
    const user = this.users.find((user) => user.id == pid);
    return user;
  }

  async update(uid, changes) {
    const index = this.users.findIndex((user) => user.id === uid);
    if (index === -1) {
      throw new Error('product not found');
    } else {
      const user = this.users[index];
      this.users[index] = { ...user, ...changes };
      return this.users[index];
    }
  }

  async delete(uid) {
    const index = this.users.findIndex((user) => user.id === uid);
    if (index === -1) {
      throw new Error('product not found');
    } else {
      this.users.splice(index, 1);
      return uid;
    }
  }
}

module.exports = UsersService;
