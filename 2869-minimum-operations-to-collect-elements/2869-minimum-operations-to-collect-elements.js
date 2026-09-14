/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
     let collection = new Set(), numOfOps = 0;

    while (collection.size !== k) {
        let pop = nums.pop();
        if (pop <= k) collection.add(pop);
        numOfOps += 1;
    }

    return numOfOps;
};