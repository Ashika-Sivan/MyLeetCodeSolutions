/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let m=Math.max(...nums)
    let indexM=nums.indexOf(m)
    console.log(indexM)
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==m && m<2*nums[i]){
            return -1
        }
    }
    return indexM
    
   console.log(m)
    
};