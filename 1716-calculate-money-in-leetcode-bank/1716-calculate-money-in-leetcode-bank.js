/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let count=0
    let round=0
    let res=0
    for(let i=1;i<=n;i++){
        res+=round+count+1
        count++
        if(count===7){
            round++
            count=0
        }
    }
    return res
    
};