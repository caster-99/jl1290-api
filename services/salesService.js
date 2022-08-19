const faker = require('faker');

class SalesService {
  constructor() {
    this.sales = [];
    this.generate();
  }

  generate() {
    const limit = 10; //uso esto para que me muestre la cantidad que mandan por el url, si no viene nada, que genere 10, hence ||10
    for (let i = 0; i < limit; i++) {
      this.sales.push({
        id: faker.datatype.uuid(),
        date:faker.datatype.datetime(),
        total:(faker.commerce.price())*((i+1 )*3),
      });
    }
  }

  create(data) {
    const newSale = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.sales.push(newSale);
    return newSale;
  }

  find() {
    return this.sales;
  }

  findOne(id) {
    return this.sales.find((item) => item.id === id);
  }

  update(id, changes) {
    const index = this.sales.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('No se encontró la venta.');
    }
    const sale = this.sales[index];
    this.sales[index] = {
      ...sale,
      ...changes,
    };
    return this.sales[index];
  }

  delete(id) {
    const index = this.sales.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('No se encontró la venta.');
    }
    this.sales.splice(index, 1);
    return { id };
  }
}
module.exports = SalesService;
