/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function(n) {
    let start=n.toString().split('')
  let sumDigit=start.map((x)=>Number(x)).reduce((acc,curr)=>acc+curr,0)
  let squareDigit=start.map((x)=>Number(x*x)).reduce((acc,curr)=>acc+curr,0)
  if((squareDigit-sumDigit)>=50){
    return true
  }
  return false
  
    
};