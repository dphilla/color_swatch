const $ = require('jquery')


  function showTopColor(topColorObject) {
     let color = topColorObject.value
     $('.top-color').append(color)
  }

  function colorizeSwatch (color) {
    let colorClass = "swatch" + color
    $('<div/>',{ class : 'swatch', id: colorClass}).appendTo(".colorized-text");
    $(`#swatch${color}`).css("background-color", color);
  }



export {showTopColor, colorizeSwatch}



