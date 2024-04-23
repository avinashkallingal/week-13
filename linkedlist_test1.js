class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }
    isEmpty(){
    return this.zise==0;
    }
    append(value){

    const newNode=new Node(value)
        if(!this.head){
            this.head=newNode;
            this.next=null
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=newNode;
        }
        this.size++
    }
    print(){
        let curr=this.head;
        while(curr){
            console.log(curr.value)
            curr=curr.next
        }
    }
    reverse(){
        
    }
}
const ans=new LinkedList()
ans.append(10);
ans.append(15);
ans.append(18);
ans.append(19);
ans.print();