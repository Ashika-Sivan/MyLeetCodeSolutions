/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let s=[...nums]
   return [...s,...nums]
    
};