var csstext = require("../index.js")
var assert = require("assert")
describe("parse",function(){
  var text = 'color: red; background-color: blue;'
  var result = csstext.parse(text)

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
describe("stringify", function(){
  it("result check", function(){
    var obj = {
      'color': 'red',
      'background-color' : 'blue'
    }
    var result = csstext.stringify(obj)
    assert.equal(result, 'background-color:blue;color:red;')
  })
})
