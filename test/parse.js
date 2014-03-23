var parse = require("../lib/parse.js")
var assert = require("assert")
describe("",function(){
  var text = 'color: red; background-color: blue;'
  var result = parse(text)
    
  it("result check", function(){
    assert.deepEqual(result, {
      "color": "red",
      "background-color" : "blue",
    })
  })

  it("sorted", function(){
    assert.deepEqual(Object.keys(result), [
      "background-color",
      "color",
    ])
  })
})