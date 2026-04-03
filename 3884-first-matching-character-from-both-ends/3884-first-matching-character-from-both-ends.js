/**
 * @param {string} s
 * @return {number}
 */
var firstMatchingIndex = function(s) {
    let n=s.length
    for(let i=0;i<s.length;i++){
        if(s[i]==s[n-i-1]){
            return i
        }
    }
    
    return -1
};