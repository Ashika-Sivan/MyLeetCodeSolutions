/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n=nums.length
    let res=[]
    let seen=new Set(nums)
    for(let i=1;i<=n;i++){
        if(!seen.has(i)){
            res.push(i)
        }
    }
   
return res
 
    
};