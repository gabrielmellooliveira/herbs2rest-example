const { entity, field } = require('gotu')

const Item = entity('Item', {
  name: field(String)
})

module.exports = Item
    