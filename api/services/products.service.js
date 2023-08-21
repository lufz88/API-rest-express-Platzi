const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

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
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(product) {
    const newProduct = {
      id: faker.string.uuid(),
      ...product,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return this.products;
  }

  async findOne(pid) {
    const product = this.products.find((prod) => prod.id == pid);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(pid, changes) {
    const index = this.products.findIndex((prod) => prod.id === pid);
    if (index === -1) {
      throw boom.notFound('product not found');
    } else {
      const product = this.products[index];
      this.products[index] = { ...product, ...changes };
      return this.products[index];
    }
  }

  async delete(pid) {
    const index = this.products.findIndex((prod) => prod.id === pid);
    if (index === -1) {
      throw boom.notFound('product not found');
    } else {
      this.products.splice(index, 1);
      return pid;
    }
  }
}

module.exports = ProductsService;
