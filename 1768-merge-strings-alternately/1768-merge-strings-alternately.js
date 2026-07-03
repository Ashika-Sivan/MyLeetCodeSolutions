/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
   let res=""
   let n=Math.min(word1.length,word2.length)//2,4
   for(let i=0;i<n;i++){//2
        res+=word1[i]
        res+=word2[i]
   }
   res+=word1.slice(n)//ab
   res+=word2.slice(n)
  return res
};