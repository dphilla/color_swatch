const API = "https://color-swatch-api.herokuapp.com/api/v1"
const handlers = require('./handlers')
const $ = require('jquery')


function topColor() {
  $.ajax({
    url: API + '/top_color',
    type: 'GET'
  }).done( function (topColor) {
    handlers.showTopColor(topColor)
  })
}

function postColor (input) {
  let color = input
  console.log(color)
  $.ajax({
    url: API + '/colors',
    type: 'POST',
    data: { color: { value: color } }
  }).done(function (message) {
  })

}


export {topColor, postColor}

