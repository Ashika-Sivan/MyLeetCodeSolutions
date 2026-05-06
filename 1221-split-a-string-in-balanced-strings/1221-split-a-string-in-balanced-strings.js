/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count=0 
    let i=0
    for(let char of s){
        if(char==='R'){
            i++
        }else{
            i--
        }

        if(i===0){
            count++
        }
    }
    return count
   
    
};