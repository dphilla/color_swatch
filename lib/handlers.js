const $ = require('jquery')


  function showTopColor(topColorObject) {
     let color = topColorObject.value
     $('.top-color').append(color)
  }

  function colorizeText (color) {
    let colorClass = "swatch" + color
    $('<div/>',{ class : 'swatch', id: colorClass}).appendTo(".colorized-text");

    $(`#swatch${color}`).css("background-color", color);
  }



export {showTopColor, colorizeText}



