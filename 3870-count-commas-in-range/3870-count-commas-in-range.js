/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
   let count=0
    for(let j=1000;j<=n;j++){
        count++
    }
    return count
};