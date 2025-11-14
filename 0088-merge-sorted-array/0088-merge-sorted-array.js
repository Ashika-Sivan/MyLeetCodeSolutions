/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let s1=nums1.slice(0,m)
    
  let res=[...s1,...nums2]
  res.sort((a,b)=>a-b)
  for(let i=0;i<res.length;i++){
    nums1[i]=res[i]
  }
  console.log(nums1)

    
};