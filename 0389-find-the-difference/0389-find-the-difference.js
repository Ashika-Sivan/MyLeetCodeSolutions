/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for(let char of t){
        if(!s.includes(char)){
            return char
        }
            s=s.replace(char,"")
        
    }
    
}