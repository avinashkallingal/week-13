class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    prepend(value){
        const node = new Node(value);
        if(!this.isEmpty()){
            node.next = this.head;
        }
        this.head = node;
        this.size++;
    }

    removeFromFront(){
        if(this.isEmpty()){
            console.log('stack is empty !!!');
        }else{
            this.head = this.head.next;
            this.size--;
        }

    }

    print(){
        if(this.isEmpty()){
            console.log('linked list is empty!!')
        }else{
            let current = this.head;
            while(current){
                console.log(current.value);
                current = current.next;
            }
        }
    }
}


class linkedListStack{
    constructor(){
        this.list = new linkedList()
    }

    push(value){
        return this.list.prepend(value)
    }

    pop(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    print(){
        return this.list.print()
    }

    isEmpty(){
        return this.list.isEmpty();
    }

}

const stack = new linkedListStack()
console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
console.log("peek value:",stack.peek())
stack.print()