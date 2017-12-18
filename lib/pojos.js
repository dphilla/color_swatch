const $ = require('jquery')
const handlers = require('./handlers')


function addSwatches(input) {
  let colors = input.split(' ')

  colors.forEach (function(color) {
    handlers.colorizeText(color)
  })



}

export {addSwatches}
