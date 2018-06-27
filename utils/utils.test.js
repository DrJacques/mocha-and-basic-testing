const utils = require('./utils');

it('should add two numbers', function(){
  var result = utils.add(33,11);
  // throw new Error('Value not correct');

  if(result!==44){
    throw new Error(`Expected 44, but got ${result}`);
  }
});
