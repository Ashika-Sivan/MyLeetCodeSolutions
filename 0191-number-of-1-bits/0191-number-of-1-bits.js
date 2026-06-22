/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let s=n.toString(2)
    let res=s.toString().split('')
    let count=0
    for(let i=0;i<res.length;i++){
        if(res[i]==='1'){
            count++
        }
    }
    
    return count
    
};