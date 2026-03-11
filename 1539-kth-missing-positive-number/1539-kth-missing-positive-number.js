/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
let count=0
let p=[]
let max=Math.max(...arr)
console.log(max)
for(let i=1;i<=max+k;i++){
    p.push(i)
}
for(let i=0;i<=p.length;i++){
    if(!arr.includes(p[i])){
        count++
    }

    if(count==k){
        return p[i]
    }
}
}

