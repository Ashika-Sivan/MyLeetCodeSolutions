/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
   
    let spl=(s1+" "+s2).split(' ')
      return spl.filter((x)=>spl.indexOf(x)==spl.lastIndexOf(x))
      
   
    
}