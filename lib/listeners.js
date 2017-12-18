const requests = require('./requests')
const $ = require('jquery')
const handlers = require('./handlers')
const pojoService = require('./pojos')

function addColors () {
  $('button').on('click', function () {
    let input = $('textarea').val()
    requests.postColor(input)
    //handlers.colorizeText(input) // move this to inside a pojo
    pojoService.addSwatches(input)

  })
}


export {addColors}

