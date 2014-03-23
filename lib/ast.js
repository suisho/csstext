module.exports = function(declarationObj){
  return Object.keys(declarationObj).map(function(prop){
    return {
      "property" : prop,
      "value" : obj[prop],
      "type" : "declaration"
    }
  })
}