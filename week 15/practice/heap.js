class Heap{
    constructor(){
     this.arr=[]
     this.size=0   
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftChildIndex(index){
        return 2*index+1
    }
    getRightChildIndex(index){
        return 2*index+2
    }
    hasParent(index){
        return this.getParentIndex(index)>=0
    }
    parent(index){
        return this.arr[this.getParentIndex(index)]
    }
    insert(value){
        this.arr[this.size]=value
        this.size++
        this.heapifyUp(this.size-1)
    }
    heapifyUp(index){
        while(this.hasParent(index)&&this.arr[this.getParentIndex(index)]>this.arr[index]){
            this.swap(this.getParentIndex(index),index)
            index=this.getParentIndex(index)
        }

    }
    swap(index1,index2){
        let temp=this.arr[index1]
        this.arr[index1]=this.arr[index2]
        this.arr[index2]=temp
    }
    print(){
        for(let i=0;i<this.size;i++){
            console.log(this.arr[i])
        }
    }
    removeMin(){
        this.swap(this.size-1,0)
        this.size--
        this.heapifyDown(0)

    }
    heapifyDown(index){
        while(this.arr[0]>this.getLeftChildIndex){
            this.swap()
        }
    }
}
const hp=new Heap()
hp.insert(10)
hp.insert(20)
hp.insert(30)
hp.print()