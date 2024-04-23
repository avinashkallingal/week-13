class Node {
    constructor(data) {
       this.data = data;
       this.next = null;
    }
}

class LinkedList {
    constructor() {
       this.head = null;
       this.tail = null;
       this.length = 0;
    }

    isEmpty(){
        
            return this.length==0
  
    }

    printAll() {
        let current = this.head;
        while (current) {
           console.log(current.data);
           current = current.next;
        }
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
           this.head = newNode;
           this.tail = newNode;
        } else {
           this.tail.next = newNode;
           this.tail = newNode;
        }
        this.length++;
        return this;
    }

    print(){
        if(this.isEmpty()){

        }
    }
}

function arrayToLinkedList(arr) {
    const linkedList = new LinkedList();
    arr.forEach(item => linkedList.add(item));
    return linkedList;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(array);
linkedList.printAll();
