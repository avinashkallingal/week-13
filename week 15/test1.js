class Node{
    constructor(){
        this.arr=[]
        this.size=0;
    } 

    getParent(index){
        return Math.floor((index+1)/2)
    }
    getLeftchild(index){
        return 2*index+1
    }
    getRightchild(index){
        return 2*index+2
    }
    hasParent(index){
        return this.getParent(index)>=0
    }
    hasLeftchild(index){
        return this.getLeftchild(index)>=0
    }
    hasRightchild(index){
        return this.getRightchild(index)>=0
    }
    parent(index){
   return this.arr[this.getParent(index)]
    }
    leftChild(index){
        return this.arr[this.getLeftchild(index)]
    }
    rightChild(index){
        return this.arr[this.getRightchild(index)]
    }

    insert(value){
        this.arr[this.size]=value
        this.size++;
        this.heapfy(this.size-1)
    }
    heapfy(index){
        while(this.hasParent(index)&&this.parent(index)>this.arr[index]){
            this.swap(this.getParent(index),index)
            index=this.getParent(index);
        }
    }

    swap(index1,index2){
        let temp=this.arr[index1]
        this.arr[index1]=this.arr[index2]
        this.arr[index2]=temp
    }

    print(){
        for(let i=0;i<this.arr.length;i++){
            console.log(this.arr[i])
        }
    }
}

const bsf=new Node();
bsf.insert(10)
bsf.insert(15)
bsf.insert(5)
bsf.insert(12)
bsf.print();