const { Ok, usecase, step, Err } = require('buchu')

const deleteList = (injection) =>
  usecase('Delete List usecase', {
    request: {
      listId: Number
    },

    setup: (ctx) => (ctx.di = Object.assign({}, {}, injection)),
    
    authorize: (user) => user === 'admin' ? Ok() : Err('Invalid user'),

    'Delete List': step(async ctx => {
      
      ctx.ret = { status: 'DELETE with success', data: ctx.req }

      return Ok()
    })
  })

module.exports = deleteList