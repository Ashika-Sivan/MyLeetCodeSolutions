/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word===word.toUpperCase()||word===word.toLowerCase())return true
    if(word.slice(0,1)===word.slice(0,1).toUpperCase()&&word.slice(1)===word.slice(1).toLowerCase()){
        return true

    }
    return false
    
}