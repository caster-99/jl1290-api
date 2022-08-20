const faker = require('faker');
const boom = require('@hapi/boom');

class SalesService {
  constructor() {
    this.sales = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.sales.push({
        id: faker.datatype.uuid(),
        date:faker.datatype.datetime(),
        total:(faker.commerce.price())*((i+1 )*3),
      });
    }
  }

  create(data) {
    return new Promise((resolve)=>{
      const newSale = {
        id: faker.datatype.uuid(),
        ...data,
      };
      this.sales.push(newSale);
      setTimeout(()=>{
        resolve(newSale)
      },2000);
    });
  }

  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.sales);
      }, 2000);
    });
  }

  findOne(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.sales.find((item) => item.id === id));
      }, 2000);
    });
  }

  update(id, changes) {
    const index = this.sales.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('No se encontró la venta.');
    }
    return new Promise((resolve)=>{
      const sale = this.sales[index];
    this.sales[index] = {
      ...sale,
      ...changes,
    };
    setTimeout(()=>{
      resolve(this.sales[index])
    },2000);
    })

  }

  delete(id) {
    const index = this.sales.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('No se encontró la venta.');
    }
    return new Promise((resolve) => {
      this.sales.splice(index, 1);
      setTimeout(()=>{
        resolve(id);
      },2000)
    });
  }
}
module.exports = SalesService;
