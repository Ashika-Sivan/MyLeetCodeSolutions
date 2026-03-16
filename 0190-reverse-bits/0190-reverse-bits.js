/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let s=n.toString(2).padStart(32,'0').split('').reverse().join('')
  let res=parseInt(s,2)
return res
   
   
   
    
};