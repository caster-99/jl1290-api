const faker = require('faker');

class ClientsService {
  constructor() {
    this.clients = [];
    this.generate();
  }

  generate() {
    const limit = 10; //uso esto para que me muestre la cantidad que mandan por el url, si no viene nada, que genere 10, hence ||10
    for (let i = 0; i < limit; i++) {
      this.clients.push({
        id: faker.datatype.number({ min: 1000000 }),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        address: faker.address.country() + ' ' + faker.address.cityName(),
      });
    }
  }

  async create(data) {
    const newClient = {
      ...data,
    };
    this.clients.push(newClient);
    return newClient;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.clients);
      }, 2000);
    });
  }

  async findOne(id) {
    return this.clients.find((item) => item.id === id);
  }

  async update(id, changes) {
    const index = this.clients.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('No se encontró el cliente.');
    }
    const sale = this.clients[index];
    this.clients[index] = {
      ...sale,
      ...changes,
    };
    return this.clients[index];
  }

  async delete(id) {
    const index = this.clients.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('No se encontró el cliente.');
    }
    this.clients.splice(index, 1);
    return { id };
  }
}
module.exports = ClientsService;
