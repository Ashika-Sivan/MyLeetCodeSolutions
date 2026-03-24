/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sum=0
    let min=Math.min(...salary)
    let max=Math.max(...salary)
    let count=-2
    
    
    for(let i=0;i<salary.length;i++){
        sum+=salary[i]
        count++

    }
   
    let res=sum-(min+max)
    return res/count
    

    
    
};