const {
    arr2tree
} = require('./util')

class BinaryTree {
    // 非递归前序遍历
    // 深度优先遍历
    /** 深度优先遍历 */
    static preOrderNR(root) {
        let stack = [];
        stack.push(root);

        while (stack.length) {
            let top = stack.pop();
            console.log(top);
            if (top.right != null) {
                stack.push(top.right);
            }
            if (top.left != null) {
                stack.push(top.left);
            }
        }
    }

    /** 前序遍历 */
    static preOrder(node) {
        if (node == null) {
            return;
        }
        // 访问节点
        // 前序遍历 开始
        console.log(node);
        BinaryTree.preOrder(node.left);
        BinaryTree.preOrder(node.right);
        // 前序遍历 结束
    }

    /** 中序遍历 */
    static inOrder(node) {
        if (node == null) {
            return;
        }
        // 访问节点
        // 中序遍历 开始
        BinaryTree.inOrder(node.left);
        console.log(node);
        BinaryTree.inOrder(node.right);
        // 中序遍历 结束
    }

    // 层序遍历
    // 广度优先遍历
    // 如果做图的遍历，要做记录，查看当前节点是否遍历过，否则会产生重复（一个节点的父亲节点可能有多个）
    // 树结构不存在这个情况
    /** 层序遍历 */
    static levelOrder(root) {
        let queue = [];
        queue.push(root);

        while (queue.length) {
            let cur = queue.shift();
            console.log(cur);
            if (cur.left != null) {
                queue.push(cur.left);
            }
            if (cur.right != null) {
                queue.push(cur.right);
            }
        }
    }

    /** 层序遍历，并将每层元素放到对用数组中 */
    static inorderTraversal(root) {
        let res = [];
        let queue = [root];
        while (queue.length) {
            let cur = [];
            // 当前层
            let index = queue.length;
            // 遍历当前层得到下一层
            for (let i = 0; i < index; i++) {
                let qu = queue.shift();
                cur.push(qu);
                if (qu.left) {
                    queue.push(qu.left);
                }
                if (qu.right) {
                    queue.push(qu.right);
                }
            }
            res.push(cur);
        }
        console.log(res)
        return res
    }

    static main(root) {
        // BinaryTree.preOrderNR(root)
        // BinaryTree.preOrder(root)
        // BinaryTree.inOrder(root)
        // BinaryTree.levelOrder(root)
        BinaryTree.inorderTraversal(root)
    }
}

const tree = arr2tree([1, 2, 3, 4, 5, 6, 7])
BinaryTree.main(tree)

/*
      1
  2       3
4   5   6   7
*/
// 4 2 5 1 6 3 7 中序遍历
// 1 2 4 5 3 6 7 前序遍历
// 4 5 2 6 7 3 1 后序遍历