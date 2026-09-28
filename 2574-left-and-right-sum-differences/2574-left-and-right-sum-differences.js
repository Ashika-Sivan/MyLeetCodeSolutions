/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const sum = nums.reduce((a, c) => a + c);
  let s = 0;
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    nums[i] = Math.abs(s +s + val - sum);
    s += val;
  }
  return nums;
    
};