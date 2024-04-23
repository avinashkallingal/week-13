// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
class Node{
    constructor(value){
        this.value=value
        this.left=null;
        this.right=null;
    }
}
class binarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root==null;
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
       
           if(root.value>newNode.value){
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
    preorder(root){
        if(root){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    print(){
        console.log(this.root)
    }
    delete(value){
    this.root=this.deleteRecurse(this.root,value) 
    }
    deleteRecurse(root,value){
       
        if(value<root.value){
            root.left=this.deleteRecurse(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteRecurse(root.right,value)
        }
        else{
            if(!root.left&&!root.right){
            return null                
            }
            else if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.right=this.minValue(root.right)
        root.right=this.deleteRecurse(root.right,value)
        }
        return root 
    }
    minValue(root){
                while(root.left){
                root=root.left
            }
            return root.value
       
    }
}
const bsf=new binarySearchTree()
bsf.insert(10)
bsf.insert(20)
bsf.insert(15)
bsf.insert(5)
bsf.delete(5)
bsf.delete(20)
bsf.preorder(bsf.root)
bsf.print()
