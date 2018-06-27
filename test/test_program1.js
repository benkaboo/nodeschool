var assert = require('assert'); // node.js core module
var B = require('../program.js');

console.log(B);


describe('Program 1', function(){
  describe('Module B', function(){
    it('should have a function argToNum', function(){
      assert.equal(typeof B, 'object');
      assert.equal(typeof B.argToNum, 'function');
    })
  })
});
