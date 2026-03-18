/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i].charCodeAt())
    }
    let p = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            p.push(Math.abs(arr[i] - arr[j]))
            break

        }
    }
    return p.reduce((acc, curr) => acc + curr, 0)
};