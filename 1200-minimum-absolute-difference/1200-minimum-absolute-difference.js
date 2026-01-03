/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let desc=arr.sort((a,b)=>a-b)
     let diff=Infinity
     let k=[]
    // let diff=Math.abs(desc[desc.length-1]-desc[desc.length-2])
//   console.log(desc[desc.length-2])
//   console.log(desc[desc.length-1])

for(let k=1;k<desc.length;k++){
    diff=Math.min(diff ,arr[k]-arr[k-1])
}

for(let i=1;i<desc.length;i++){
    if(desc[i]-desc[i-1]===diff){
        k.push([desc[i-1],desc[i]])
    }
}
return k
    // for(let i=0;i<desc.length;i++){
    //         if(desc[i+1]-desc[i]==diff){
    //             k.push([desc[i+1],desc[i]])
    //         }
    // }
    // let s=k.map((x)=>x).sort((a,b)=>a[0]-b[1])
    // return s
    // console.log(s)
    
    
};