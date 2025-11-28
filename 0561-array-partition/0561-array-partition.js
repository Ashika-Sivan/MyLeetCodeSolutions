/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let sum=0
    let sorting=nums.sort((a,b)=>a-b)
    for(let i=0;i<sorting.length;i+=2){
        sum+=sorting[i]
    }
    return sum
    
};