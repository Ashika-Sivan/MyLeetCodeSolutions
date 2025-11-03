/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    let bn
    let rev
    for(let i=2;i<=n-2;i++){
        bn=n.toString(i)
        // console.log(typeof bn )
        rev=bn.split('').reverse().join('')
        if(bn!==rev){
            return false
        }
        
    }
    
    return true
    
    
    
};