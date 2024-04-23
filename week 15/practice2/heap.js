class Heap {
    constructor() {
        this.arr = []
      
        this.size = 0
    }
    getParentIndex(index) {
        return Math.floor((index + 1) / 2)
    }
    hasParent(index) {
        return this.getParentIndex(index) >= 0
    }
    getLeftChildIndex(index) {
        return (2 * index) + 1
    }
    getRightChildIndex(index) {
        return (2 * index) + 2
    }
    parent(index) {
        return this.arr[this.getParentIndex(index)]
    }
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.size
    }

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.size
    }

    insert(value) {
        this.arr[this.size] = value
        this.size++
        this.heapifyUp(this.size - 1)

    }
    heapifyUp(index) {
        while (this.hasParent(index) && this.arr[this.getParentIndex(index)] > this.arr[index]) {
            this.swap(this.getParentIndex(index), index)
            index = this.getParentIndex(index)
        }
    }
    swap(index1, index2) {
        let temp = this.arr[index1]
        this.arr[index1] = this.arr[index2]
        this.arr[index2] = temp
    }
    removeMin() {
        if (this.size === 0) {
            console.log('heap is empty');
            return;
        }
        const data = this.arr[0];
        this.arr[0] = this.arr[this.size - 1];
        this.size--;
        this.heapifyDown(0);
        return data;
    }

    heapifyDown(index) {
        while (this.hasLeftChild(index)) {
            let smallestChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.getRightChildIndex(index) < this.getLeftChildIndex(index)) {
                smallestChildIndex = this.getRightChild(index);
            }
            if (this.arr[index] < this.arr[smallestChildIndex]) {
                break;
            }
            this.swap(index, smallestChildIndex);
            index = smallestChildIndex;
        }
    }
    print() {
        for (let i = 0; i < this.size; i++) {
            console.log(this.arr[i])
        }
      


    }
    heapSort() {
        let sortedArray = []
        while (this.size > 0) {
            sortedArray.push(this.removeMin())
        }
        return sortedArray
    }
    
}
const hp = new Heap()
hp.insert(10)
hp.insert(15)
hp.insert(8)
hp.insert(20)
hp.print()
hp.heapSort()

