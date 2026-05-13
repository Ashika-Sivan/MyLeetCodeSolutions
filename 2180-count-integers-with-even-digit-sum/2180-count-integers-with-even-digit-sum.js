/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let arr=[]
    let s
    for(let i=1;i<=num;i++){
        if(i<9 && i%2===0){
            arr.push(i)
        }

        if(i>9){
         s= i.toString().split('').map((x)=>Number(x)).reduce((acc,curr)=>acc+curr,0)
           
           
        }
        if(s%2===0){
            arr.push(i)
        }

    }
    return arr.length
   
   
   
};