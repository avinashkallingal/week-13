class heap{
    constructor(){
        this.arr=[]
    
        this.size=0

    }
    getParent(index){
        return Math.floor((index+1)/2)
    }
    getLeftChild(index){
        return (2*index)+1
    }
    getRightChild(index){
        return (2*index)+1
    }
    hasLeftChild(index){
        return this.getLeftChild(index)>=this.size
    }
    hasParent(index){
        return this.getParent(index)>=0
    }
    parent(index){
        return this.arr[this.getParent(index)]
    }

    insert(value){
       
        this.arr[this.size]=value
        this.size++
        this.heapify(this.size-1)
        
    }
    heapify(index){
      
            while(this.hasParent(index)&&this.arr[index]>this.arr[this.getParent(index)]){
                this.swap(index,this.getParent(index))
                index=this.getParent(index)
            }
            

      
    }
    removeMin(){
        const data=this.arr[0]
        this.arr[0]=this.arr[this.size-1]
        this.size--
        this.heapifydown(0)
        return data
        
    }
    heapifydown(index){
        let smallestChildIndex=this.getLeftChild(index)
        while(this.hasLeftChild(index)){
            if(this.getLeftChild(index)<this.getRightChild(index)){
                smallestChildIndex=this.getRightChild(index)
            }
            if(this.arr[index]<this.arr[smallestChildIndex]){
                break;
            }
            this.swap(index,smallestChildIndex)
            index=smallestChildIndex
        }
    }

    print(){
        for(let i=0;i<this.size;i++){

                console.log(this.arr[i])
        }
    }
    swap(index1,index2){
        let temp=this.arr[index1]
        this.arr[index1]=this.arr[index2]
        this.arr[index2]=temp
    }

}
const hp=new heap()
hp.insert(10)
hp.insert(30)
hp.insert(9)
hp.insert(12)
hp.print()
console.log("hiiiiii")
hp.removeMin()
hp.print()