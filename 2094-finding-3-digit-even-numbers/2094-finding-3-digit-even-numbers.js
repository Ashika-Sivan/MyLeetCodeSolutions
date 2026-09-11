/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let result=[]
   for(let i=0;i<digits.length;i++){
    if(digits[i]===0)continue
    for(let j=0;j<digits.length;j++){
        for(let k=0;k<digits.length;k++){
            if(digits[k]%2!==0){
                continue
            }

            if(i===j||j===k||k==i)continue

            let num=digits[i]*100+digits[j]*10+digits[k]
            result.push(num)
        }
    }
   }
    return [...new Set(result)].sort((a,b)=>a-b)

};