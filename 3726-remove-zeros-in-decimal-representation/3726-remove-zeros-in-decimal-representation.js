/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
   let arr=n.toString()
   num=''
  for(let i=0;i<arr.length;i++){
    if(arr[i]!=='0'){
        num+=arr[i]

    }
  }
  return Number(num)
};