/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let count=0
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            let sum=(i*i)+(j*j)
            let c=Math.sqrt(sum)
          if(c%1===0 && c<=n){
            count++

          }

        }
    }
    return count

   

};