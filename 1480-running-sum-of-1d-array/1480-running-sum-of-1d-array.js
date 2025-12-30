/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum=0
   let arr=nums.map((x)=>sum+=x)
   return arr
    
};