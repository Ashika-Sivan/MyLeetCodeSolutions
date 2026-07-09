/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function(nums) {
    let mid=Math.floor(nums.length/2)
    let count=0
   for(let num of nums){
        if(num===nums[mid]){
            count++

        }

   }
  return count>1 ? false :true
    
    
    
    
};