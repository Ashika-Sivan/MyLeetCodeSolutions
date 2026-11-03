/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    
    let max = -Infinity;
    let sum = 0;

    for (let num of nums) {

        if(num > max)
            max = num;
            
        sum += num;
    }

    return  max * nums.length - sum;
   
};