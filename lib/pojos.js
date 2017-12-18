const $ = require('jquery')
const handlers = require('./handlers')
import COLORS from './data/colors'


function addSwatches(input) {
  let colors = input.split(' ')
  let colorDict = COLORS
  let colorKeys = Object.keys(colorDict)
  //check for uniques
  //then one without uniques for post

  colors.forEach (function(color) {
    if (colorKeys.includes(color)) {
      handlers.colorizeSwatch(color)
    }
  })

}

export {addSwatches}
