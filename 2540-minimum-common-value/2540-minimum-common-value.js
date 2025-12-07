/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
   let newSet=new Set(nums2)
   for(let num of nums1){
    if(newSet.has(num)){
        return num
    }
   }
   
   
    
return  -1


    
};