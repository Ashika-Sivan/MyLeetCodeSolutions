/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let odd=[]
    let even=[]
    for(let i=0;i<nums.length;i++){
        if(i%2!=0){
            odd.push(nums[i])

        }else{
            even.push(nums[i])
        }
    }

    let odd1=odd.sort((a,b)=>b-a)
    let even1=even.sort((a,b)=>a-b)
    let res=[]

    for(let i=0;i<even1.length;i++){
        res.push(even1[i])
        if(i<odd1.length){
            res.push(odd1[i])
        }

    }
    return res
    
    
};