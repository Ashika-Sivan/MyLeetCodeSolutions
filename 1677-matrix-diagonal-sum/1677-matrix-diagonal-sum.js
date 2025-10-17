/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let prime=0
    let sec=[]
    let n=mat.length

    for(let i=0;i<n;i++){
        prime+=(mat[i][i])
        prime+=(mat[i][n-1-i])
       
    }
    
    return n%2 == 1 ? prime-=mat[Math.floor(n/2)][Math.floor(n/2)] : prime
};