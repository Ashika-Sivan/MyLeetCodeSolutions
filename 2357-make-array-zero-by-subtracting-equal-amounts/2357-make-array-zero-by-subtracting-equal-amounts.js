/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    while(nums.includes(0)){
    nums.splice(nums.indexOf(0),1)
}
    let sets = new Set([...nums])
    console.log("sets",sets)
    return sets.size
    
};