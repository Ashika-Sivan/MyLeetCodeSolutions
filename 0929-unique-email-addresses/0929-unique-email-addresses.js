/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
        let set=new Set()
        for(let char of emails){
            let [first,sec]=char.split('@')
             first=first.split('+')[0].replaceAll('.','')  
             set.add(first+'@'+sec)
        }

    return set.size

};