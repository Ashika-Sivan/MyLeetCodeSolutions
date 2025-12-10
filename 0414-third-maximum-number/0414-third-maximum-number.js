/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let newArr=[...new Set(nums)]
    newArr.sort((a,b)=>b-a)
    if(newArr.length>=3){
        return newArr[2];
    }else{
        return newArr[0]
    }
    
    
};