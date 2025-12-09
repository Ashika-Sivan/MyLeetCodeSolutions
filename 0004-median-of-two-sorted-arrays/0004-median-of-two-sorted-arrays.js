/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged=nums1.concat(...nums2)
    let result=0
    let n=merged.length-1
    merged.sort((a,b)=>a-b)
  for(let i=0;i<merged.length;i++){
    if(merged.length%2!==0){
   let pos=(merged.length+1)/2
   return merged[pos-1]
  }else{
    let pos=(merged.length)/2
    return (merged[pos]+merged[pos-1])/2
  }
  }
    
};