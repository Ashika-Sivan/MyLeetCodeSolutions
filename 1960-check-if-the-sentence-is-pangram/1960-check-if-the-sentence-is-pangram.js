/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let str='abcdefghijklmnopqrstuvwxyz'
    let find=str.split('').every((x)=>sentence.includes(x))
    return find
    
};