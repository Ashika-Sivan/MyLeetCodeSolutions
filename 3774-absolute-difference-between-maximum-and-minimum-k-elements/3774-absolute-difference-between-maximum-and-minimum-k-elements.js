/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
    let min=nums.sort((a,b)=>a-b).slice(0,k).reduce((acc,curr)=>acc+curr,0)
    let max=nums.sort((a,b)=>b-a).slice(0,k).reduce((acc,curr)=>acc+curr,0)
    let diff=Math.abs(max-min)
    return diff
    
   
}