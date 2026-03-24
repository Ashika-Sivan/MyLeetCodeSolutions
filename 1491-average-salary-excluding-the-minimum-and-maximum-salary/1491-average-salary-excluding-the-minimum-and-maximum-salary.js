/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sort=salary.sort((a,b)=>a-b)
    sort.shift()
    sort.pop()
    let s=sort.length
   let red=sort.reduce((acc,curr)=>acc+curr)/s
  return red
};