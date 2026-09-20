/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let st="zyxwvutsrqponmlkjihgfedcba"
    let sum=0
    for(let i=0;i<s.length;i++){
        for(let j=0;j<st.length;j++){
            if(s[i]===st[j]){
                sum+=(i+1)*(j+1)
                break

            }
        }
        
    }
    return sum
    
};