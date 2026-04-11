/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let max=Math.max(...arr)
    let seen=[]
    for(let i=0;i<=max+k;i++){
        if(!seen.includes(i)){
            seen.push(i)
        }

    }
    let find=seen.filter((x)=>!arr.includes(x))
    return find[k]
   
    
};