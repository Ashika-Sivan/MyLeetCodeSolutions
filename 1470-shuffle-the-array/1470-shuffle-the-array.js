/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let left=[]
    let right=[]
    let res=[]
    for(let i=0;i<n;i++){
        left.push(nums[i])

    }
    for(let i=n;i<nums.length;i++){
        right.push(nums[i])
    }
    
    for(let j=0;j<left.length;j++){
        res.push(left[j])
        if(j<right.length){
            res.push(right[j])
        }

    }
   return res
};