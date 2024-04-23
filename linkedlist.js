class Node {
    constructor(data) {
       this.data = data;
       this.next = null;
    }
}

class LinkedList {
    constructor() {
       this.head = null;
       this.size=0;
    }

    isEmpty(){
        
            return this.length==0
  
    }
    prepend(value){
        const newNode=new Node(value);
        if(this.isEmpty()){
            this.head=newNode;
        }
        else{
            newNode.next=this.head;
            this.head=newNode
        }
        this.size++;
    }

    append(value){
        const newNode=new Node(value);
        let previous=this.head
        while(previous.next){
          
        }
    }

    
    print(){
        if(this.isEmpty()){
           console.log("list is empty") 
        }
        else{
            let current=this.head
            let listValues=''
            while(current){
                listValues=listValues+'${current.value}'
                current=current.next
            }
            console.log(listValues)
        }
    }
}


