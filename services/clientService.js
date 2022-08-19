const faker = require('faker');
const boom = require('@hapi/boom');

class ClientsService {
  constructor() {
    this.clients = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.clients.push({
        id: faker.datatype.number({ min: 1000000 }),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        address: faker.address.country() + ' ' + faker.address.cityName(),
      });
    }
  }

  create(data) {
    const newClient = {
      ...data,
    };
    this.clients.push(newClient);
    return newClient;
  }

  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.clients);
      }, 2000);
    });
  }

  findOne(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.clients.find((item) => item.id === id));
      }, 2000);
    });
  }

  update(id, changes) {
    const index = this.clients.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('No se encontró el cliente.');
    }
    return new Promise((resolve) => {
      const sale = this.clients[index];
      this.clients[index] = {
        ...sale,
        ...changes,
      };
      setTimeout(() => {
        resolve(this.clients[index]);
      }, 2000);
    });
  }

  delete(id) {
    const index = this.clients.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('No se encontró el cliente.');
    }
    return new Promise((resolve) => {
      this.clients.splice(index, 1);
      setTimeout(() => {
        resolve(id);
      }, 2000);
    });

  }
}
module.exports = ClientsService;
