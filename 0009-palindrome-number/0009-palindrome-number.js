/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let newX=x.toString().split('').reverse().join('')
  let palindromeNumber=Number(newX)
   console.log(palindromeNumber)
   if(x===palindromeNumber){
    return true
   }
   return false
    
};