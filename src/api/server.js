const express = require('express')
const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require("../../doc/swagger")

const auth = require('./auth')

const generateRoutes = require('../../herbs2rest/generateRoutes')

const controllerList = require('./controllerList')

class Server {
  constructor(server) {
    this.server = server

    this.generateSwagger()
    this.middlewares()
    this.generateRoutes()
    this.init()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(auth)
  }

  generateSwagger() {
    this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  }

  generateRoutes() {
    const routes = new express.Router()

    generateRoutes(controllerList, routes)

    this.server.use(routes)
  }

  init() {
    this.server.listen(
      { port: 3002 }, console.log(`Service runing in http://localhost:3002`)
    )
  }
}

module.exports = new Server(express())
