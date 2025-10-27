/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let findProduct=1

    for(let i=0;i<nums.length;i++){
        findProduct*=nums[i]

    }
    console.log(findProduct)
  
 
    if(findProduct>0){
        return 1
    }else if(findProduct<0){
        return -1
    }else{
        return 0

    }
    


    

    

    
    
};