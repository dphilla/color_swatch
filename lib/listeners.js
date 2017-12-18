const requests = require('./requests')
const $ = require('jquery')
const handlers = require('./handlers')
const pojoService = require('./pojos')

function addColors () {
  $('button').on('click', function () {
    let input = $('textarea').val()
    pojoService.addSwatches(input)

  })
}

function onReturn () {
  $('textarea').keypress(function (event) {
   let keyCode = event.which
    if (keyCode === 13) {
      let input = $('textarea').val()
      pojoService.addSwatches(input)
    }
  })
}

export {addColors, onReturn}

