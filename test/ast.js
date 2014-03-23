
var ast = require("../lib/ast.js")
var assert = require("assert")
describe("",function(){
  var obj = {
    "color": "red",
    "background-color" : "blue",
  }
  var result = ast(obj)
  console.log(result)
})