/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    // let diff=0
    // for(let i=0;i<s.length;i++){
    //     diff+=Math.abs(i-s.indexOf(t[i]))

    // }
    // return diff
    let sum=0
    let arr=[]
    let k=[]
    for(let i=0;i<s.length;i++){
        for(let j=0;j<t.length;j++){
            if(s[i]===t[j]){
                arr.push(i,j)
                sum+=Math.abs(i-j)
                

            }
        }
         

    }
   return sum

};