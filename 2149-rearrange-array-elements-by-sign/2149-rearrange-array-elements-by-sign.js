/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let a1=[]
    let a2=[]
    let res=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            a2.push(nums[i])
            
        }else{
            a1.push(nums[i])
        }
    }
    for(let j=0;j<a1.length;j++){
        res.push(a1[j])
        if(j<a2.length){
            res.push(a2[j])
        }

    }
        return res
};