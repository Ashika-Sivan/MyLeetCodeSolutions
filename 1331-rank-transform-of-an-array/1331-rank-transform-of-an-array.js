/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sortArr=[...arr].sort((a,b)=>a-b)
    let map=new Map()
    let currRank=1

    for(let num of sortArr){
        if(!map.has(num)){
            map.set(num,currRank++)
        }
    }
    console.log(currRank)
    let res=[]
    for(let i=0;i<arr.length;i++){
        res.push(map.get(arr[i]))
    }
  return res
   
    
};