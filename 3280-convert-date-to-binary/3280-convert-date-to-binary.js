/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let dateSpl=date.split('-').map((x)=>Number(x))
    let a=dateSpl[0].toString(2)
    let b=dateSpl[1].toString(2)
    let c=dateSpl[2].toString(2)
    return `${a}-${b}-${c}`
   
    
};