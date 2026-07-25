/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
let num=n.toString().split('').map((x)=>Number(x))
 let res=[]
    for(let i=0;i<num.length;i++){
       
        for(let j=i+1;j<num.length;j++){
            res.push(num[i]*num[j])

        }
        
    //    return Math.max()
    }
    return Math.max(...res)
  
    
};