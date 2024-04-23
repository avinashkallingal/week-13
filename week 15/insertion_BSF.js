class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}

class binarySearchTree{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root===null;
    }
    insert(value){
        const newNode=new Node(value);
        if(this.isEmpty()){
            this.root=newNode;
        }else{
           return this.insertRecurse(this.root,newNode)
        }
    }
    insertRecurse(root,newNode){
        if(newNode.value<this.root.value){
            if(root.left==null){
                root.left=newNode
                console.log(root.value+"root value")
            }else{
                this.insertRecurse(this.root.left,newNode)
            }
            
        }else{
            if(root.right==null){
                root.right=newNode
            }else{
                insertRecurse(root.right,newNode)
            }
            
        }
    }
    search(root,value){
        if(this.root==value){
            return true
        }else{
            this.search(this.root,value)
        }
        return false
        console.log(this.root)
    }
}
const bsf=new binarySearchTree();
bsf.insert(25)
bsf.insert(26)
bsf.insert(23)
bsf.insert(21)



bsf.search(bsf.root,21)
console.log("there is emty? "+bsf.isEmpty())


