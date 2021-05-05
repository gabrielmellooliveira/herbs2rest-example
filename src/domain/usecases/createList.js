const { Ok, usecase, step, Err } = require('buchu')
const Item = require('../entities/Item')

const createList = (injection) =>
  usecase('Create List usecase', {
    request: {
      title: String,
      item: Item
    },

    setup: (ctx) => (ctx.di = Object.assign({}, {}, injection)),
    
    authorize: (user) => user === 'admin' ? Ok() : Err('Invalid user'),

    'Create List': step(async ctx => {

      ctx.ret = { status: 'POST with success', data: ctx.req }

      return Ok()
    })
  })

module.exports = createList