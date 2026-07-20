/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {

    
    let num="1234567890"
    let arr=[]
    for(let i=0;i<s.length;i++){
        if(num.includes(s[i])){
            arr.push(s[i])

        }
    }
    let res=[...new Set(arr)].map((x)=>Number(x)).sort((a,b)=>b-a)
    return res.length>=2?res[1]:-1
    
    
};