const { faker } = require('@faker-js/faker');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 10; // si no viene size, asigna 10
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.string.uuid(),
        name: faker.commerce.department(),
      });
    }
  }

  find() {
    return this.categories;
  }

  findOne(cid) {
    const category = this.categories.find((cat) => cat.id == cid);
    return category;
  }

  update(cid, changes) {
    const index = this.categories.findIndex((cat) => cat.id === cid);
    if (index === -1) {
      throw new Error('product not found');
    } else {
      const category = this.categories[index];
      this.categories[index] = { ...category, ...changes };
      return this.categories[index];
    }
  }

  delete(cid) {
    const index = this.categories.findIndex((cat) => cat.id === cid);
    if (index === -1) {
      throw new Error('product not found');
    } else {
      this.categories.splice(index, 1);
      return cid;
    }
  }
}

module.exports = CategoriesService;
