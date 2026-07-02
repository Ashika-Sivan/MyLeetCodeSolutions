/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    let find=[...nums]
    let numRev=nums.reverse()
    return [...find,...numRev]
  
    
};