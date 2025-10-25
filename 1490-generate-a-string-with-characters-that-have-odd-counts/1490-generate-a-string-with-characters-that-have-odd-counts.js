/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let s=''
        if(n%2!==0){
            for(let i=0;i<n;i++){
                s+='p'

            }
        }else{
            for(let i=0;i<n-1;i++){
                s+='p'
            }
        }
        return n%2===0?s+='b':s
};