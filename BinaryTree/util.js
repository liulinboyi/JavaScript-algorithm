exports.arr2tree = function arr2tree(arr) {
  function toNode(item) {
    //转换数组项至节点
    if (item === null || item === undefined) {
      return null;
    } else {
      return new TreeNode(item);
    }
  }
  let queue = [];
  const tree = toNode(arr.shift());
  queue.push(tree); //入队列第一个元素
  while (arr.length > 0) {
    //当数组里还有项的时候就拿数组的项去填充队列
    let current = queue.shift();
    current.left = toNode(arr.shift());
    current.right = toNode(arr.shift());
    if (arr.length === 0) {
      break;
    }
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return tree;
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// arr2tree([1, 2, 3, 4, 5, 6, 7]);
/**
      1
  2      3
 4  5  6   7
 */

// arr2tree([1, null, 3, 4, 5]);
/**
     1
null   3
      4  5
 */