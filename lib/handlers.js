const $ = require('jquery')


  function showTopColor(topColorObject) {
     let color = topColorObject.value
     $('.top-color').append(color)
  }

  function colorizeText (color) {
    $('<div/>',{ class : 'swatch'}).appendTo(".colorized-text");
    $('.swatch').css("background-color", color);
  }



export {showTopColor, colorizeText}



