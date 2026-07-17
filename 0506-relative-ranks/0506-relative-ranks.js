/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sorted = [...score].sort((a, b) => b - a);

    let ans = [];

    for (let i = 0; i < score.length; i++) {
        let rank = sorted.indexOf(score[i]) + 1;

        if (rank === 1) {
            ans.push("Gold Medal");
        } else if (rank === 2) {
            ans.push("Silver Medal");
        } else if (rank === 3) {
            ans.push("Bronze Medal");
        } else {
            ans.push(rank.toString());
        }
    }

    return ans;
};