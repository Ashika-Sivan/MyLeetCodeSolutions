/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
      let newArr=words.map((num)=>num[0]).join('')
    if(newArr===s){
        return newArr
    }
    return false
};