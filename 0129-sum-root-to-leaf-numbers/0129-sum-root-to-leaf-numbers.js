/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {

    function DFS(node,curr){
        if(node==null){
            return 0
        }

         curr=curr*10+node.val

        if(node.left===null && node.right===null){
            return curr
        }

        return DFS(node.left,curr)+DFS(node.right,curr)

    }
return DFS(root,0)

};