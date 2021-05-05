const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'APIs Document',
    description: 'API with Herbs2Rest',
    termsOfService: '',
    contact: {
      name: 'HerbsJS',
      email: 'herbsjs@gmail.com',
      url: 'https://herbsjs.org'
    }
  },
  servers: [
    {
      url: 'http://localhost:3000/',
      description: 'Local server'
    }
  ],
  tags: [
    {
      name: 'List'
    }
  ],
  paths: {
    '/list': {
      'post': require('./routes/createList.swagger')
    }
  }
}

module.exports = swaggerDocument