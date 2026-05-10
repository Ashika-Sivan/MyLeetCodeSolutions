/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function (nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            res.push(nums[i])
        }
    }

    let final = res.filter((x) => res.indexOf(x) === res.lastIndexOf(x))
    if (final.length === 0) {
        return -1
    } else {
        return final[0]
    }




};