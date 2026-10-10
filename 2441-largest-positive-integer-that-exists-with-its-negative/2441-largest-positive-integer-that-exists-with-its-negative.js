/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let pos=nums.filter((x)=>x>0).sort((a,b)=>b-a)
    let neg=nums.filter((y)=>y<0).map((x)=>Math.abs(x)).sort((a,b)=>b-a)
    // console.log(neg)
    let res=[]

    for(let i=0;i<pos.length;i++){
        for(let j=0;j<neg.length;j++){
            if(pos[i]===neg[j]){
                return pos[i]
                
            }
           
        }
    }
    return -1
    // console.log(res)
    
    
};