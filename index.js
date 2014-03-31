var qs = require('querystring')
// no escape
qs.escape = function(str){
  return str
}

module.exports.parse = function(cssText){
  qs.parse(cssText,";", ":")
}
// parse cssText and sorted property csstext
module.exports.stringify = function(cssText){
  var parsed = cssText

  // trim
  return Object.keys(parsed).sort().filter(function(key){
    return (key !== '')
  }).map(function(key){
    var value = parsed[key]
    if(typeof value == "string"){
      value = value.trim()
    }
    key = key.trim()
    return key + ":" + value
  }).join(";")
}
