const faker = require('faker');

class ClientsService {
  constructor() {
    this.clients = [];
    this.generate();
  }

  generate() {
    const limit = 100; //uso esto para que me muestre la cantidad que mandan por el url, si no viene nada, que genere 10, hence ||10
    for (let i = 0; i < limit; i++) {
      this.clients.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        address: (faker.address.country())+(" ")+(faker.address.cityName())+(" ")+(faker.address.buildingNumber())
      });
    }
  }

  create(data) {
    const newClient = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.clients.push(newClient);
    return newClient;
  }

  find() {
    return this.clients;
  }

  findOne(id) {
    return this.clients.find((item) => item.id === id);
  }

  update(id, changes) {
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

  delete(id) {
    const index = this.clients.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('No se encontró el cliente.');
    }
    this.clients.splice(index, 1);
    return { id };
  }
}
module.exports = ClientsService;
