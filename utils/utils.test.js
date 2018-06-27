const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', function(){
  var result = utils.add(33,11);
  // throw new Error('Value not correct');

  // if(result!==44){
  //   throw new Error(`Expected 44, but got ${result}`);
  // }

  expect(result).toBe(44);
});

// it('should expect some values',function(){
//   // expect(44);
//   expect({
//     name:'Jacques',
//     age:25,
//     location:'Little Rock'
//   }).toInclude({
//     age: 25
//   })
// })

//it should verify first and last names are set
//assert it icnludes firstName and lastName with proper values
it('should set  firstName and lastName', ()=>{
  var user = {location:'Little Rock', age:25};
  var result = utils.setName(user,'Jacques Iragena');

  expect(result).toInclude({
    firstName: 'Jacques',
    lastName: 'Iragena'
  });
});
