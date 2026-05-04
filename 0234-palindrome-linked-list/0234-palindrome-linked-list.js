/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr=[]
    let curr=head
    while(curr){
        arr.push(curr.val)
        curr=curr.next
    }
  return arr.join('')===arr.reverse().join('')
   
};