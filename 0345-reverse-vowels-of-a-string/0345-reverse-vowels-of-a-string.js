/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels=['a','e','i','o','u','A','E','O','U','I']
    let arr=s.split('')
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(vowels.includes(arr[i])){
            res.push(arr[i])

        }
    }
    res.reverse()

    let index=0
    for(let i=0;i<arr.length;i++){
        if(vowels.includes(arr[i])){
            arr[i]=res[index]
            index++
        }

    }
    return arr.join('')
}