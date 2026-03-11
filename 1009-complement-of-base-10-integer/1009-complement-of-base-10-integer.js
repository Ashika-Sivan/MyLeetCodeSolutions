/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let binary=n.toString(2)
    let comp=binary.split('').map((x)=>x==1?0:1).join('')
    let rev=parseInt(comp,2)
    return rev
   

    
};