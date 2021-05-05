const createList = {
  tags: ['List'],
  description: 'Create a list of items',
  operationId: 'createList',
  parameters: {
    id: { description: 'ID do usuário.' }
  },
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    '200': {          
      description: 'A list of item',
      'content': {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              'item_name': {
                type: 'string',
                description: 'Item Name'
              }
            }
          }
        }
      }
    }
  }
}

module.exports = createList