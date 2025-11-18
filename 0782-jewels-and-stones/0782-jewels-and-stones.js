/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
   let s1=jewels.split('')
   let s2=stones.split('')
let count=0

   for(let i=0;i<s1.length;i++){
    for(let j=0;j<s2.length;j++){
        if(s1[i]===s2[j]){
            count++
        }
    }
   }
   console.log(count)
   return count
}