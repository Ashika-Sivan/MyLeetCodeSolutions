/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
   let chIndex=word.indexOf(ch)
   let res=''
   for(let i=chIndex;i>=0;i--){
            res+=word[i]
   }

   for(let i=chIndex+1;i<word.length;i++){
    res+=word[i]
   }
   return res
   
    

}