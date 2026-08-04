/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let mini=Math.min(...nums)
    let maxi=Math.max(...nums)
    let res=[]
    for(let i=mini;i<=maxi;i++){
        if(!nums.includes(i)){
            res.push(i)
        }
    }
    return res
}