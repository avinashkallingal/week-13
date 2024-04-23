class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    addLast(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++
            return
        }
        let ref = this.tail
        this.tail.next = newNode;
         this.tail = newNode;
        newNode.prev = ref;
        this.length ++;
        return

    }
    addFirst(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++
            return
        }
        let ref = this.head;
        this.head = newNode;
        newNode.next = ref;
        ref.prev = newNode;
        this.length++
        return
    }

    addAfter(index,val){
        if(index<0 || index>this.length-1) return false;
        if(index==this.length-1) return this.addLast(val)
        const newNode = new Node(val);
    let curr = this.head;
    let count =0;
    while(curr.next){
        if(index === count){
            let ref = curr.next;
            curr.next = newNode;
            newNode.next = ref;
            newNode.prev = curr;
            if(!newNode.next){
                this.tail = newNode
            }
            this.length++;
            return true
        }
        curr=curr.next;
        count++
    }


        
    }
    prinList(){
        return this
    }
    print(){
        if(!this.head) return false;
        let curr = this.head;
        while(curr){
            console.log(curr.val);
            curr = curr.next;
        }
        return
    }
    printReverse(){
        if(!this.head) return false;
        let curr = this.tail;
        while(curr){
            console.log(curr.val);
            curr=curr.prev;
        }
        return
    }
    deleteFirst(){
        if(!this.head) return false;
        if(this.length==1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return true
        }
        let currHeadd = this.head;
        this.head = currHeadd.next
        this.head.prev = null;
        this.length--;
        return true
    }

    deleteLast(){
        if(!this.head) return false;
        if(this.length==1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return true
        }
        let currTail = this.tail;
        this.tail = currTail.prev;
        this.tail.next = null;
        currTail.prev = null;
        this.length--;
        return true
    }

    delete(index){
        if(!this.head) return false;
        if(index<0 || index>this.length-1) return false;
        if(index==0) return this.deleteFirst()
        if(index==this.length-1) return this.deleteLast()
        let curr = this.head;
        let count = 0;
        let prev = null;
        while(curr.next){
            if(index == count){
                prev.next = curr.next;
                this.length--
                return true;
            }
            prev = curr;
            curr = curr.next;
            count++
        }
    }

    deleteAfter(index){
        if(!this.head) return false
        if(index<0 || index>=this.length-1) return false;
        if(index==this.length-2) return this.deleteLast();
        let curr = this.head;
        let count = 0;
        while(curr){
            if(count === index){
                curr.next = curr.next.next;
                this.length--;
                return true;
            }
            curr = curr.next;
            count++
        }
    }
    deleteBefore(index){
        if(!this.head) return false;
        if(index<=0 || index>this.length) return false;
        if(index == 1) return this.deleteFirst();
        if(index == this.length) return this.deleteLast();
        let curr = this.head;
        let count = 0;
        let prev = null
        while(curr){
            if(index == count+1){
                prev.next = curr.next;
                this.length--;
                return true;
            }
            prev = curr;
            curr = curr.next;
            count++
        }

    }
}

const list = new doublyLinkedList();
list.addLast(10)
list.addLast(20)
list.addLast(30)
list.addLast(40)
list.addLast(50)
//list.addAfter(0,100)
//console.log(list.prinList());
//list.printReverse()
//list.delete(4)
//list.deleteAfter(3)
list.deleteBefore(1)
list.print()
//list.print()