/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {  
    let res=[]
    for(let i=0;i<nums.length;i++){
        let digitSum=nums[i].toString().split('').map((x)=>Number(x)).reduce((acc,curr)=>acc+curr)
        if(digitSum==i){
            return Math.min(digitSum)
        }
    }
    return -1
};