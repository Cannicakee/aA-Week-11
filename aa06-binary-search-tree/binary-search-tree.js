// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null
    }

    insert(val, currentNode = this.root) {
        if (!this.root) {
            this.root = new TreeNode(val)
            return
        }
        if (val < currentNode.val) {
            if (!currentNode.left) {
                currentNode.left = new TreeNode(val)
            } else {
                this.insert(val, currentNode.left)
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = new TreeNode(val)
            } else {
                this.insert(val, currentNode.right)
            }
        }
    }

    search(val) {
        if (!this.root) {
            return false;
        }
        let current = this.root
        while (current) {
            if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            } else {
                return true;
            }
        }
        return false;
    }


    preOrderTraversal(currentNode = this.root) {
        if (!currentNode) return;

        console.log(currentNode.val)
        this.preOrderTraversal(currentNode.left)
        this.preOrderTraversal(currentNode.right)
    }


    inOrderTraversal(currentNode = this.root) {
        if (!currentNode) return;

        this.inOrderTraversal(currentNode.left)
        console.log(currentNode.val)
        this.inOrderTraversal(currentNode.right)
    }


    postOrderTraversal(currentNode = this.root) {
        if (!currentNode) return;

        this.postOrderTraversal(currentNode.left)
        this.postOrderTraversal(currentNode.right)
        console.log(currentNode.val)
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        const queue = [];

        queue.push(this.root)

        while (queue.length) {
            let current = queue.shift()
            console.log(current.val);
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        const stack = [];
        stack.push(this.root);

        while (stack.length) {
            let current = stack.pop();
            console.log(current.val)

            if (current.left) {
                stack.push(current.left)
            }

            if (current.right) {
                stack.push(current.right)
            }
        }
    }
}

module.exports = { BinarySearchTree, TreeNode };