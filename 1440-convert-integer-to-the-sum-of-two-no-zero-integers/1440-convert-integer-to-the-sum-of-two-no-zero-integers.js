/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {

    for(let i=1;i<n;i++){
        let x=n-i

        if(!i.toString().includes('0') && !x.toString().includes('0')){
            return [i,x]
        
        }


    }
   
    
   
};