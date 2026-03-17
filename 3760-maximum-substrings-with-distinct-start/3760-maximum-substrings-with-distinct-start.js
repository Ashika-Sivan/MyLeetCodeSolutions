/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
   let newSet=[...new Set(s)]
   return newSet.length
};