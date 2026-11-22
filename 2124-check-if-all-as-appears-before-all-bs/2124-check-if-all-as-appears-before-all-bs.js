/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {

let count1=0;
let count2=0
let slen=0
if(s.length==1){
    return true
}
let everya=true
   for(let x of s){
      if(x=="a"){
        continue
      }else{
        everya=false;
        break
      }
   }
   if(everya){
    return true
   }

    for(let i=0;i<s.length;i++){
        if(s[i]=="a"){
            if(count2>0){
              return false
            }else{
               count1++
            }
        }else if(s[i]=="b"){
            count2++
            if(count2==1){
               slen=s.length-i
            }
            if(slen==count2){
                return true
            }
        }
    }
   if(!s.includes('a')){
    return true
   }



};