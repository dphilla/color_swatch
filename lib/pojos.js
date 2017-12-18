const $ = require('jquery')
const handlers = require('./handlers')
const requests = require('./requests')
import COLORS from './data/colors'


Array.prototype.unique = function() {                   //srsly, js, por que
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}


function addSwatches(input) {
  let colors = input.split(' ')
  let colorDict = COLORS
  let colorKeys = Object.keys(colorDict)
  let uniqColors = colors.unique()


  uniqColors.forEach (function(color) {
    if (colorKeys.includes(color)) {
      handlers.colorizeSwatch(color)
    }
  })

  colors.forEach (function(color) {
    if (colorKeys.includes(color)) {
      requests.postColor(color)
    }
  })





}

export {addSwatches}
