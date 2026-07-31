/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq={}
    let k=0
   for(let num of nums){
    freq[num]=(freq[num]||0)+1
   }
//   let k=0
let largest=-Infinity
let findKey=null
for(let key in freq){
    if(freq[key]>largest){
        largest=freq[key]
        findKey=key
    }
}
  return Number(findKey)
  
};