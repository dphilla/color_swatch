import './stylesheets/styles.scss'
import COLORS from './data/colors'
const $ = require('jquery')
const requests = require('./requests')
const listeners = require('./listeners')


$(document).ready(function(){
  requests.topColor()
  listeners.addColors()
  listeners.onReturn()
})

