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
        }else{
            this.insertRecurse(this.root,newNode)
        }
    }
    insertRecurse(root,newNode){
        if(root.value<newNode.value){
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
    search(root){
        if(root){
        while(root.right){
            root=root.right
        }
        console.log(root.right)}
    }
}
const bsf=new BinarySeearchTree()
bsf.insert(10)
bsf.insert(20)
bsf.insert(25)
bsf.insert(2)
bsf.search(bsf.root)