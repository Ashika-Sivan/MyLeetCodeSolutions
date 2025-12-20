/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let freq={}
    for(let char of nums){
        freq[char]=(freq[char]||0)+1
    }
    // console.log(freq)
    let arr=[]
    let k=[]
   return nums.sort((a,b)=>{
       if(freq[a]!==freq[b]){
         return freq[a]-freq[b]
       }
       return b-a
   })
   


};