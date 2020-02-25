const assert = require('assert');
const calculator = require('./calculator.js');

  describe('#calculate(expression)',function() {
    it('should return 5 when the expression is "3+2"',function(){
      assert.equal(calculator.calculate('3+2'), 5);
    });
    it('should return 31 when the expression is "3+2**5+8/4-2*3"',function() {
      assert.equal(calculator.calculate('3+2**5+8/4-2*3'), 31);
    });
    it('should return Infinity when the expression is "34*5+2/0*45-7"',function(){
      assert.equal(calculator.calculate('34*5+2/0*45-7'), Infinity);
    });
    it('should return NaN when the expression is "3-3*1/3-0*2/0"', function(){
      assert.equal(isNaN(calculator.calculate('3-3*1/3-0*2/0')), true);
    });
    //add 10 meaningfully different unit tests
    it('should return SyntaxError when the expression is "5+9*"', function(){
      assert.equal(calculator.calculate('5+9*'), SyntaxError);
    });
    it('should return SyntaxError when the expression is "a*b-4"', function(){
      assert.equal(calculator.calculate('a*d-4'), SyntaxError);
    });
    it('should return 55 when the expression is "1+2+3+4+5+6+7+8+9+10"', function(){
      assert.equal(calculator.calculate('1+2+3+4+5+6+7+8+9+10'), 55)
    });
    it('should return 3 when the expression is "3*2-5+6/3"', function(){
      assert.equal(calculator.calculate('3*2-5+6/3'), 3)
    });
    it('should return 100 when the expression is "(3+7)*10"', function(){
      assert.equal(calculator.calculate('(3+7)*10', 100));
    });
    it('should return 5 when the expression is "3     +    2"', function(){
      assert.equal(calculator.calculate('3     +    2', 5));
    });
    it('should return Infinity when the expression is "10/3+15/0 - 7"', function(){
      assert.equal(calculator.calculate('10/3+15/0 - 7',Infinity));
    });
    it('should return Infinity when the expression is "10/3 + 5/0"', function(){
      assert.equal(calculator.calculate('10/3 + 5/0',Infinity));
    });
    it('should return NaN when the expression is "5-0/0"', function(){
      assert.equal(isNaN(calculator.calculate('5-0/0')),true);
    });
    it('should return NaN when the expression is "0**2/0"', function(){
      assert.equal(isNaN(calculator.calculate('0**2/0')),true);
    });
});
