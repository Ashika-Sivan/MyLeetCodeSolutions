/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n=nums.length
    let find=(n*(n+1)/2)
    let findSum=nums.reduce((acc,curr)=>acc+curr,0)
    return find-findSum



    
};