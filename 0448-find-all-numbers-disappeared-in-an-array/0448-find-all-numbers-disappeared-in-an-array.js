/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr=new Set(nums)
    let res=[]
    for(let i=1;i<=nums.length;i++){
        if(!arr.has(i)){
            res.push(i)
        }
    }
    return res
    
};