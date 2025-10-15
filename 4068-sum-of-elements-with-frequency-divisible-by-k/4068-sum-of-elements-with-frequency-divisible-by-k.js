/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
    let freq={}
    let sum=0
    for(let char of nums){
        freq[char]=(freq[char]||0)+1
    }
    for(let num in freq){
        if(freq[num]%k===0){
            console.log(typeof num,typeof freq[num])
            console.log(freq[num])
            sum+=(freq[num]*Number(num))

        }
    }
    return sum
   
};