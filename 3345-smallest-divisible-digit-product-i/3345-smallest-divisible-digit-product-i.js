/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
   let m=n
   while(true){
    let str=m.toString()
    let product=1

    for(let i=0;i<str.length;i++){
        product=product*Number(str[i])
    }

    if(product%t===0){
        return m
    }
    m++
   }
};