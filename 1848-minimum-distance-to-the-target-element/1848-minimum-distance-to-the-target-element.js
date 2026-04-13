/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let s=Infinity
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
           s= Math.min(Math.abs(i-start),s)
           
        }
    }
    return s
    
};