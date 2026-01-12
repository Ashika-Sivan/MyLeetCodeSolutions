/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let find=s.slice(0,k).split('').reverse().join('')
    let sec=s.slice(k,s.length)
    let res=find.concat(sec)
    return res
    
};