/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
     let map = new Map(knowledge);
    
    return s.replace(/\((.*?)\)/g, (match, key) => {
        return map.get(key) || "?";
    });
    
};