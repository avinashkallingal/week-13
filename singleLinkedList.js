class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    addEnd(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++
            return true;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.tail = newNode;
        this.length++;
        return true
    }
    isEmpty() {
        return this.length == 0
    }
    delete(val){
        if(!this.isEmpty()){
            let current=this.head
            if(this.head.value==val){
                this.head=current.next
                return
            }          

            while(current.next){
                if(current.next.value==val){
                    current=current.next.next
                   
                }
                current=current.next
            }
        }
    }


    deleteBefore(val = 4) {
        if (!this.head) return false;
        if (this.head.val == val) return false
        let curr = this.head;
        let prev = null;
        while (curr) {
            if (curr.next.val == val) {
                if (!prev) {
                    let ref = this.head;
                    this.head = curr.next;
                    ref.next = null;
                    this.length--
                    return true
                }
                prev.next = curr.next;
                this.length--;
                return true;
            }
            prev = curr;
            curr = curr.next
        }
    }

    deleteAfter(val) {
        if (!this.head) return false;
        let curr = this.head;
        let proc = curr.next
        while (curr.next) {
            if (curr.val === val) {
                if (!curr.next.next) {
                    curr.next = null;
                    this.tail = curr;
                    this.length--
                    return true
                }
                curr.next = curr.next.next;
                this.length--;
                return true
            }
            proc = proc.next
            curr = curr.next
        }
    }
    print() {
        if (!this.head) {
            console.log("Empty");
            return;
        }
        let curr = this.head;
        while (curr) {
            console.log(curr.val);
            curr = curr.next
        }
        return;
    }
    reverse() {
        if (!this.head) return false;
        let curr = this.head;
        let prev = null;
        let nextNode;
        while (curr) {
            nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        this.head = this.tail;
        this.tail = prev;
    }
    reverseRecursive(curr = this.head, prev = null) {
        if (!curr) {
            return;
        }
        if (!curr.next) {
            this.tail = this.head;
            this.head = curr;
            curr.next = prev;

            return;
        }

        const nextNode = curr.next;
        curr.next = prev;
        this.reverseRecursive(nextNode, curr);
    }
    printlist() {
        return this
    }
}

const list = new singleLinkedList();
list.addEnd(1)
list.addEnd(2)
list.addEnd(3)
list.addEnd(4)

//list.deleteBefore()
//list.deleteAfter(2)
//list.reverse()
//list.reverseRecursive()
//list.print()
list.delete(3)
list.print()
//console.log(list.printlist());