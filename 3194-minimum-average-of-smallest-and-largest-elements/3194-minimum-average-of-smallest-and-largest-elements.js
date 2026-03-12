/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let arr=[]
    let mini
    let sort=nums.sort((a,b)=>a-b)
   for(let i=0;i<sort.length;i++){
    let a=sort[i]
    let b=sort[sort.length-1-i]

    arr.push((a+b)/2)
   
   
   }
    return Math.min(...arr)
   
}