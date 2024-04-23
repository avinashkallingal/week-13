class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getsize(){
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        
        this.size++;
    }

    removeFromBack() {
        if (this.isEmpty()) {
            console.log('Queue is empty !!!');
        } else {
            let current = this.head;
            let prev = null
            while(current.next){
                prev = current
                current = current.next;
            }
            prev.next = null;
            this.size--;
        }

    }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty!!')
        } else {
            let current = this.head;
            let arr = []
            while (current) {
                console.log(current.value);
                current = current.next;
            }
           
        }
    }
}

class linkedListQueue{
    constructor(){
        this.list = new linkedList();
    }

    isEmpty(){
        return this.list.length === 0;
    }

    getSize(){
        return this.list.getsize();
    }

    enqueue(value){
        this.list.prepend(value)
    }

    dequeue(){
        this.list.removeFromBack()
    }

    peek(){
        return this.list.head.value
    }

    print(){
        this.list.print()
    }
}

const queue = new linkedListQueue()
queue.print()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.dequeue()
console.log("peek value of the queue is : ",queue.peek())
queue.print()
console.log("size of the queue is : " ,queue.getSize())