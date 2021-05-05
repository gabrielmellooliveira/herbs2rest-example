const { Ok, usecase, step, Err } = require('buchu')

const getList = (injection) =>
  usecase('Get List usecase', {
    request: {
      listId: Number,
      id: Number
    },
    
    setup: (ctx) => (ctx.di = Object.assign({}, {}, injection)),

    authorize: (user) => user === 'admin' ? Ok() : Err('Invalid user'),

    'Get List': step(async ctx => {

      ctx.ret = { status: 'GET with success', data: ctx.req }

      return Ok()
    })
  })

module.exports = getList