const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  if (!rootNode) return null;

  let current = rootNode;
  while (current.left) {
    current = current.left
  }

  return current.val;
}

function findMaxBST(rootNode) {
  if (!rootNode) return null;

  let current = rootNode;
  while (current.right) {
    current = current.right;
  }

  return current.val;
}

function findMinBT(rootNode) {
  if (!rootNode) return null;

  let min = rootNode.val;
  const traverse = (node) => {
    if (!node) return;
    min = Math.min(min, node.val);
    traverse(node.left)
    traverse(node.right)
  }
  traverse(rootNode)
  return min;
}

function findMaxBT(rootNode) {
  if (!rootNode) return null;

  let max = rootNode.val;
  const traverse = (node) => {
    if (!node) return;
    max = Math.max(max, node.val);
    traverse(node.left);
    traverse(node.right);
  };
  traverse(rootNode);
  return max;
}

function getHeight(rootNode) {
  if (!rootNode) return -1;

  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

function balancedTree(rootNode) {
  if (!rootNode) return true;

  const heightDiff = Math.abs(getHeight(rootNode.left) - getHeight(rootNode.right));
  if (heightDiff > 1) {
    return false;
  }

  return balancedTree(rootNode.left) && balancedTree(rootNode.right);
}

function countNodes(rootNode) {
  if (!rootNode) return 0;

  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

function getParentNode(rootNode, target) {
  if (!rootNode || !target) return undefined;

  if (rootNode.val === target) return null;

  const findParent = (node, targetVal) => {
    if (!node) return undefined;

    if ((node.left && node.left.val === targetVal) || (node.right && node.right.val === targetVal)) {
      return node;
    }
    const leftResult = findParent(node.left, targetVal);
    if (leftResult !== undefined) return leftResult;
    return findParent(node.right, targetVal);
  };

  return findParent(rootNode, target);
}

function inOrderPredecessor(rootNode, target) {
  if (!rootNode || !target) return null;

  const findNode = (node, targetVal) => {
    if (!node) return null;

    if (node.val === targetVal) return node;

    const left = findNode(node.left, targetVal);
    if (left) return left;

    return findNode(node.right, targetVal);
  };

  const targetNode = findNode(rootNode, target);
  if (!targetNode) return null;

  if (targetNode.left) {
    let current = targetNode.left;
    while (current.right) {
      current = current.right;
    }
    return current.val;
  }

  let parent = getParentNode(rootNode, target);
  while (parent && parent.val > target) {
    parent = getParentNode(rootNode, parent.val);
  }

  return parent ? parent.val : null;
}

function deleteNodeBST(rootNode, target) {
  if (!rootNode) return null;

  let parent = null;
  let current = rootNode;

  // Find the node to delete and its parent
  while (current && current.val !== target) {
    parent = current;
    if (target < current.val) {
      current = current.left;
    } else {
      current = current.right;
    }
  }

  // If the node with the target value doesn't exist
  if (!current) return undefined;

  // Case 1: Node to delete has no children
  if (!current.left && !current.right) {
    if (!parent) {
      rootNode = null;
    } else if (current === parent.left) {
      parent.left = null;
    } else {
      parent.right = null;
    }
  }
  // Case 2: Node to delete has one child
  else if (!current.right) {
    if (!parent) {
      rootNode = current.left;
    } else if (current === parent.left) {
      parent.left = current.left;
    } else {
      parent.right = current.left;
    }
  } else if (!current.left) {
    if (!parent) {
      rootNode = current.right;
    } else if (current === parent.left) {
      parent.left = current.right;
    } else {
      parent.right = current.right;
    }
  }
  // Case 3: Node to delete has two children
  else {
    let successor = current.right;
    let successorParent = current;
    while (successor.left) {
      successorParent = successor;
      successor = successor.left;
    }

    // Replace the value of the node to delete with the value of the successor
    current.val = successor.val;

    // Delete the successor node (which is either a leaf or a node with right child only)
    if (successor === successorParent.left) {
      successorParent.left = successor.right;
    } else {
      successorParent.right = successor.right;
    }
  }

  return rootNode;
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
