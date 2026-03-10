/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word===word.toUpperCase())return true
    if(word===word.toLowerCase())return true
    let a=word.slice(0,1)
    let b=word.slice(1)
    if(a===a.toUpperCase()&&b===b.toLowerCase()){
        return true

    }
    return false
    
}