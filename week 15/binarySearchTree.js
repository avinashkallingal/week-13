class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class tree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    preOrder(root) {
        if (root) {
            console.log("Pre-Order traversal : ", root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log("In-Order traversal : ", root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log('Post-Order traversal : ', root.value)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        console.log(root)
        if (!root) {
            return false;
        } else {
            if (root.value == value) {
                return true;
            } else if (value < root.value) {
                this.search(root.left, value);
            } else {
                this.search(root.right, value);
            }
        }
        return false
    }

   

    maxValue(root) {
        while (root.right) {
            root = root.right
        }
        return root.value;
    }

    minValue(root) {
        while (root.left) {
            root = root.left;
        }
        return root.value;
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (!root) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            } else if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            root.value = this.minValue(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
    bfsTraversal(root) {
        let queue = [];
        queue.push(root);
        while (queue.length) {
            let current = queue.shift();
            console.log(current.value);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
    }

}

const bst = new tree()
bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(7);
bst.insert(3)
console.log(bst.search(bst.root, 10))
bst.bfsTraversal(bst.root)
bst.delete(3)
console.log("min value of the tree : ", bst.minValue(bst.root))
bst.delete(15)
console.log("max value of the tree : ", bst.maxValue(bst.root))
bst.bfsTraversal(bst.root)
// console.log(bst.isEmpty())