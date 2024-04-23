class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySeearchTree{
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
        }
        else{
            this.insertRecurse(this.root,newNode)
        }
    }
    insertRecurse(root,newNode){
        if(newNode.value<root.value){
            if(root.left==null){
                root.left=newNode
            }else{
                this.insertRecurse(root.left)
            }
        }else{
            if(root.right==null){
                root.right=newNode
            }
        }
    }
}