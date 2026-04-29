/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
   const doubled = (s + s).slice(1, -1);
    return doubled.includes(s);
}