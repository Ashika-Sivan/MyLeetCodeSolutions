/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str="abcdefghijklmnopqrstuvwxyz"
    let sum=0
    let st=""
    for(let i=0;i<s.length;i++){
        for(let j=0;j<str.length;j++){
            if(s[i]==str[j]){
                st+=(j+1)
                break
                
            }
        }
    }
    for (let i=0;i<k;i++) {
        sum = 0;
        for (let j=0;j<st.length;j++) {
            sum+=Number(st[j]);
        }
        st = String(sum);
    }
    return sum
};