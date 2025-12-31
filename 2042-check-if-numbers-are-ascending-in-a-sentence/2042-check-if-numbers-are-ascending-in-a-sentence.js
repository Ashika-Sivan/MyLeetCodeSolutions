/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    
    let num='1234567890'
    let filtering=s.split(' ').filter((x)=>!isNaN(x)).map((x)=>Number(x))
    for(let i=0;i<filtering.length-1;i++){
        if(filtering[i]>=filtering[i+1]){
            return false
        }
    }
    return true
    
};