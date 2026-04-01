/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let freq={}
    for(let num of nums){
        if(num%2===0){
             freq[num]=(freq[num]||0)+1
        }
    }

    let large=-Infinity
    let p=-1
    for(let i in freq){
        if(freq[i]>large){
            large=freq[i]
            p=i

        }
        
        
    }
    return Number(p)
   
};