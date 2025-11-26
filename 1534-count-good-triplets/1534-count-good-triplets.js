/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let count=0
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            for(let k=j;k<arr.length;k++){
                if(0<=i && i<j && j<k && k<arr.length &&Math.abs(arr[i]-arr[j])<=a&&Math.abs(arr[j] - arr[k]) <= b&&Math.abs(arr[i] - arr[k]) <= c){
                    count++

                }
            }
        }
    }
   return count
   
};