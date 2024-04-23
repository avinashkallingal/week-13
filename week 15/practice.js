// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class node{
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
        const newNode=new node(value)
       if(this.isEmpty()){
           this.root=newNode
       }else{
           this.insertRecurse(this.root,newNode)
       }
    }
    insertRecurse(root,newNode){
        if(root.value>newNode.value){
            if(root.left==null){
                root.left=newNode
            }else{
                return this.insertRecurse(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right=newNode
            }else{
                return this.insertRecurse(root.right,newNode)
            }
        }
    }
    print(){
        console.log(this.root)
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value==value){
                return true
            }
            if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
        return false
    }
    preorder(root){
        if(root){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    delete(value){
        this.root=this.deletefunction(this.root,value)
    }
    deletefunction(root,value){
        if(!root){
            return root;
        }
        if(root.value>value){
            root.left=this.deletefunction(root.left,value)
        }else if(root.value<value){
            root.right=this.deletefunction(root.right,value)
        }
        else {
        if(!root.right&&!root.left){
            return null
        }
        else if(!root.right){
            return root.left
        }
        else if(!root.left){
            return root.right
        }
        root.value=this.minValue(root.right)
        root.right=this.deletefunction(root.right,root.value)
            
        }
        return root
        
    }
    minValue(root){
        while(root){
            root=root.left
        }
        return root.value
    }
    
}
const bsf=new binarySearchTree()
bsf.insert(10)
bsf.insert(20)
console.log(bsf.search(bsf.root,30))
bsf.preorder(bsf.root)
bsf.delete(20)
bsf.print()