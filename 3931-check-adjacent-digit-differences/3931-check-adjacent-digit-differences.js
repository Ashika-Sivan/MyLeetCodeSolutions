/**
 * @param {string} s
 * @return {boolean}
 */
var isAdjacentDiffAtMostTwo = function(s) {
    for (let i = 0; i < s.length - 1;i++) {
        const difference = Math.abs(Number(s[i]) - Number(s[i + 1]));

        if (difference > 2) {
            return false;
        }
    }

    return true;
    
     
    
};