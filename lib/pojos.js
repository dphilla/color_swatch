const $ = require('jquery')
const handlers = require('./handlers')
const requests = require('./requests')
const helpers = require('./helpers')
import COLORS from './data/colors'


function addSwatches(input) {  // would continue refactoring into helpers
  let colors = input.split(' ')
  colors = helpers.makeLowerCase(colors)
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
