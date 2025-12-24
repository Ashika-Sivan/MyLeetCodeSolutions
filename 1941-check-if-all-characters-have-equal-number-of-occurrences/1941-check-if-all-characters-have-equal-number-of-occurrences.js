/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let freq={}
    for(let char of s){
        freq[char]=(freq[char]||0)+1
    }
   let arr=[]
   for(let char in freq){
       arr.push(freq[char])
   }
   let allEqual=arr.every((x)=>x===arr[0])
   return allEqual
    
};