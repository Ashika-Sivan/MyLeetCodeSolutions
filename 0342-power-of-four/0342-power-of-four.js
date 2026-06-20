/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    while(n>0 && n%4===0){
        n/=4
    }

    return n===1

    // let s=n/4

    // if(s===1){
    //     return true
    // }
    // if(s!==4){
    //     return false
    // }
    // return true

    // console.log(n/4)
};
