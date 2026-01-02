/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    // let freq={}
    // for(let num of nums){
    //     freq[num]=(freq[num]||0)+1
    // }
    // for(let num in freq){
    //     let s=freq[num]
    //     let k=num
    //     console.log(k)
    // }

    let rep=nums.filter((x)=>nums.indexOf(x)!==nums.lastIndexOf(x))
    let k=[...new Set(rep)]
    return k[0]
};