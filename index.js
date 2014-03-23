var cssTextParser = require('./lib/parse')

var declarations = function(declarationObj){
  return Object.keys(declarationObj).map(function(prop){
    return {
      type : "declaration",
      property : prop,
      value : obj[prop],
    }
  })
}
var selector = function(selector, cssText){
  var csstext = cssTextParser(cssTextMap[selector])
  return {
    type : "rule",
    selectors : [ selector ],
    declarations : declarations(csstext)
  }
}

var rules = function(cssTextMap){
  return Object.keys(cssTextMap).map(function(selector){
    selector(selector, cssTextMap[selector])
  })
}

module.exports = function(cssTextMap){
  return {
    type : "stylesheet",
    stylesheet : {
      rules : rules(cssTextMap)
    }
  }
}