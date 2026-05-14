/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
   let arr=nums.sort((a,b)=>a-b)
   let n=nums.length-1
   for(let i=0;i<n;i++){
    if(nums[i]!=i+1){
        return false
    }
   }
   return arr[n]===n
}