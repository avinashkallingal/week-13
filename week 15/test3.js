class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySeearchTree{
    conastructor(){
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

    delete(value){
       
            this.root=this.deleteNode(this.root,value)
        
    }
    deleteNode(root,value){
        if(value<root.value){
            
        }
    }


    search(root){
    while(root.right){
        root=root.right
    }
    console.log(root.value)
    }

}
const bsf=new BinarySeearchTree()
bsf.insert(10)
bsf.insert(30)
bsf.insert(5)
console.log(bsf.root)
bsf.search(bsf.root)