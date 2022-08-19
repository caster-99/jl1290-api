const faker = require('faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 10; //uso esto para que me muestre la cantidad que mandan por el url, si no viene nada, que genere 10, hence ||10
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
      });
    }
  }

  create(data) {
    return new Promise((resolve) => {
      const newProduct = {
        id: faker.datatype.uuid(),
        ...data,
      };
      this.products.push(newProduct);
      setTimeout(() => {
        resolve(newProduct);
      }, 2000);
    });
  }

  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 2000);
    });
  }

  findOne(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products.find((item) => item.id === id));
      }, 2000);
    });
  }

  update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('No se encontró el producto.');
    }
    return new Promise((resolve) => {
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes,
      };
      setTimeout(() => {
        resolve(this.products[index]);
      },2000);
    });
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('No se encontró el producto.');
    }
    return new Promise((resolve) => {
      this.products.splice(index, 1);
      setTimeout(()=>{
        resolve(id);
      },2000)
    });
  }
}
module.exports = ProductsService;
