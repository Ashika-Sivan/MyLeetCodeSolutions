/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sortArr=salary.sort((a,b)=>a-b)
    sortArr.shift()
    sortArr.pop()
    let n=sortArr.length
    let res=sortArr.reduce((acc,curr)=>acc+curr)/n
    return res
    
};