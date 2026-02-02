/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let sum=nums[0]
    nums.shift()
    let sortArr=nums.sort((a,b)=>a-b).slice(0,2).reduce((acc,curr)=>acc+curr,sum)
    return sortArr
    // for(let i=0;i<sortArr.length;i++){
    //     sum+=sortArr[i]
    // }

//    return sum
    
    
};