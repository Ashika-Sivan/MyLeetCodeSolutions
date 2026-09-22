/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
      let score = [];

    for (let i = 0; i < operations.length; i++) {
        let op = operations[i];

        if (op === "C") {
            score.pop();
        } 
        else if (op === "D") {
            score.push(score[score.length - 1] * 2);
        } 
        else if (op === "+") {
            let last = score[score.length - 1];
            let secondLast = score[score.length - 2];

            score.push(last + secondLast);
        } 
        else {
            score.push(Number(op));
        }
    }

      return score.reduce((sum, value) => sum + value, 0);
};