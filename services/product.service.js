const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100; // si no viene size, asigna 10
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      });
    }
  }

  create() {}

  find() {
    return this.products;
  }

  findOne(pid) {
    const product = this.products.find((prod) => prod.id == pid);
    return product;
  }

  update() {}

  delete() {}
}

module.exports = ProductsService;
