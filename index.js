var cssqs = require('querystring')
// no escape
cssqs.escape = function(str){
  return str
}

cssqs.unescape = function(str){
  return str
}

module.exports.parse = function(cssText){
  var parsed = cssqs.parse(cssText,";", ":")
  return filteringObj(parsed)
}
// parse cssText and sorted property csstext
module.exports.stringify = function(cssText){
  // trim
  var obj = filteringObj(cssText)

  return cssqs.stringify(obj, ";", ":") + ";"
}
var filteringObj = function(obj){
  var trimed = {}
  Object.keys(obj).sort().forEach(function(key){
    if(key === '' || obj[key] === '') return
    trimed[key.trim()] = obj[key].trim()
  })
  return trimed
}
