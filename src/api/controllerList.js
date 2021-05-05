const controllerList = [
  {
    name: 'lists',
    idParameter: 'listId',
    getAll: require('../domain/usecases/getLists'),
    getById: require('../domain/usecases/getLists'),
    post: require('../domain/usecases/createList'),
    put: require('../domain/usecases/updateList'),
    delete: require('../domain/usecases/deleteList')
  }
]

module.exports = controllerList