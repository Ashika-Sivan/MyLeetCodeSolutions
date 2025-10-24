/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x=0
    let y=0
    for(let i of moves){
        if(i==='U')y++
        else if(i==='D')y--
        else if(i=='L')x++
        else if(i=='R')x--
        
        
    }
    

    return x===0&&y===0
};