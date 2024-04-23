class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class binarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root==null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertRecursive(this.root,newNode)
        }
    }
    insertRecursive(root,newNode){
        if(newNode.value<root.value){
            if(root.left==null){
                root.left=newNode
            }else{
                this.insertRecursive(root.left,newNode)
            }

        }else{
            if(root.right==null){
                root.right=newNode
            }else{
                this.insertRecursive(root.right,newNode)
            }
        }

    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    search(root,value){
        if(this.root==null){
            console.log("empty")
            return false
        }else{
        if(value==root.value){
            return true
        }else if(value<root.value){
            this.search(root.left,value)
        }
        else if(value>root.value){
            this.search(root.right,value)
        }}
        return false
    }
    delete(value){
       this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(!root){
            return root
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
        if(!root.left&&!root.right){
            return null
        }
        else if(!root.left){
            return root.left
        }
        else if(!root.right){
            return root.right
        }
        root.value=this.minVal(root.right)
        root.right=this.deleteNode(root.right,value)
        }
        return root
    }
}
const bsf=new binarySearchTree()
bsf.insert(10)
bsf.insert(5)
bsf.insert(15)
bsf.insert(20)
bsf.insert(4)

bsf.preOrder(bsf.root)
console.log(bsf.search(bsf.root,10))