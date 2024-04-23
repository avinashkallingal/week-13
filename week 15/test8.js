class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySerchTree{
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
            this.insertRecurse(this.root,newNode)
        }
    }
    insertRecurse(root,newNode){
        if(newNode.value<root.value){
            if(root.left==null){
                root.left=newNode
            }else{
                this.insertRecurse(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right=newNode
            }else{
                this.insertRecurse(root.right,newNode)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }
        if(value==root.value){
            return true
        }
        else if(value<root.value){
            this.search(root.left,value)
        }
        else if(value>root.value){
            this.search(root.right,value)
        }
    
        return false
    }
}
const bsf=new BinarySerchTree()
bsf.insert(10)
bsf.insert(20)
bsf.insert(15)
bsf.insert(8)
console.log(bsf.search(bsf.root,10))
console.log(bsf.root)
