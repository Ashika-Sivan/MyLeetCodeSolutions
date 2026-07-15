/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    return n.toString().split('').map((x)=>Number(x)).reduce((acc,curr)=>acc+curr,0)
    // let freq={}
    // for(let num of splitN){
    //     freq[num]=(freq[num]||0)+1
    // }
    // let sum=0
    // for(let num in freq){
    //     let res=num*freq[num]
    //     sum+=res
    // }
    // return sum
    
};