/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let vowels='aeiouAEIOU'
    let spl=sentence.split(' ')
    let res=[]

    for(let i=0;i<spl.length;i++){
        let word=spl[i]
        if(vowels.includes(word[0])){
           word=word+'ma'

        }else {
            let s=word.slice(0,1)//s
            let remain=word.slice(1)
            word=remain+s+'ma'
            
        }
         let k=0 
         while(k<=i){
                 word+='a'
                 k++

         }
         res.push(word)
         
    }
      
       
    // console.log(res.join(' '))

    return res.join(' ')
  
    
};