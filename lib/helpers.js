//pojo helpers

Array.prototype.unique = function() {                   //srsly javascript, por queee
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

function makeLowerCase (colors) {
  let sanitizedArray = []
  colors.forEach( function (color) {
    sanitizedArray.push(color.toLowerCase())
  })
  return sanitizedArray
}



export {makeLowerCase}
