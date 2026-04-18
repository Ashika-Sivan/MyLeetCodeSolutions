/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let rev=n.toString().split('').reverse().map((x)=>Number(x)).join('')
    let res=Math.abs(n-rev)
    return res
    
    
};