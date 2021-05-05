const { Ok, usecase, step, Err } = require('buchu')
const Item = require('../entities/Item')

const updateList = (injection) =>
  usecase('Update List usecase', {
    request: {
      listId: Number,
      item: Item
    },

    setup: (ctx) => (ctx.di = Object.assign({}, {}, injection)),
    
    authorize: (user) => user === 'admin' ? Ok() : Err('Invalid user'),

    'Update List': step(async ctx => {
      
      ctx.ret = { status: 'PUT with success', data: ctx.req }

      return Ok()
    })
  })

module.exports = updateList