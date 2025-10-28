/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let findProduct=nums.reduce((acc,curr)=>acc*curr,1)
    if(findProduct>0){
        return 1
    }else if(findProduct<0){
        return -1
    }else{
        return 0
    }
    
};