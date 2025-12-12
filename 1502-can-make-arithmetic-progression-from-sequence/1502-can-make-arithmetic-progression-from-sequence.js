/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let sort=arr.sort((a,b)=>b-a)
      let diff=sort[0]-sort[1]
   
   for(let i=0;i<sort.length-1;i++){
    if(sort[i]-sort[i+1]!==diff){
        return false
    }
   }
   return true
 
  
  
}
  