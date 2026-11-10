/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
 let spl=s.split(' ')
 let arr=[]
 for(let num of spl){
    let x=num.slice(-1)
    let data=num.slice(0,-1)
    arr[x-1]=data
 
 }
    return arr.join(' ')
 
 
};