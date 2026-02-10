/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let num=s.split('').map((x)=>Number(x))
    let res=[]
    
    for(let i=1;i<num.length;i++){
        let left=num.slice(0,i)
        let right=num.slice(i)

        let c1=0
        let c2=0
        for(let i=0;i<left.length;i++){
            if(left[i]===0){
                c1++
            }

        }

        for(let i=0;i<right.length;i++){
            if(right[i]==1){
                c2++
            }
        }
        res.push(c1+c2)

    }
    return Math.max(...res)

    
};