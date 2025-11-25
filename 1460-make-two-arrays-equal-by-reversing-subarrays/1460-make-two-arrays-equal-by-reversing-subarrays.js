/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    
   let t1=target.sort((a,b)=>a-b)
   let arr1=arr.sort((a,b)=>a-b)
   return t1.every((x,i)=>x===arr1[i])
    
};