/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let freq={}
    let arr=[]
    for(let num of nums){
        freq[num]=(freq[num]||0)+1

        if(freq[num]===2){
           arr.push(num)
        }

    }
    return arr
    
    
};