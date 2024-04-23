
class graph{
    constructor(){
   
        this.list={}
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=new Set()
        }

    }
    edgeAdd(vertex1,vertex2){
        if(!this.list[vertex1]){
            this.addVertex(vertex1)
        }
    if(!this.list[vertex2]){
        this.addVertex(vertex2)
    }
    this.list[vertex1].add(vertex2)
    this.list[vertex2].add(vertex1)
    }

    deleteEdges(vertex1,vertex2){
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }


    removeVertex(vertex){
        if(!this.list[vertex]){
            return
        }
        for(let ver of this.list[vertex]){
            this.deleteEdges(ver,vertex)
        }
    }

    bsf(list,start){
        let queue=[start]
        let visited=new Set()
        let result=[]
        while(queue.length){
            let vertex=queue.shift()
            if(!visited.has(vertex)){
                visited.add(vertex)
                result.push(vertex)
         
          for(let ver of list[vertex]){
            queue.push(ver)
           
          }
        }
        }
        return result
    }



    display(){
        for(let ver in this.list){
            console.log(ver+":=>"+[...this.list[ver]])

        }
    }
}
const heap=new graph();
heap.edgeAdd(10,20)
heap.edgeAdd(10,30)
heap.edgeAdd(10,25)
heap.edgeAdd(30,40)
heap.edgeAdd(40,10)
heap.edgeAdd(25,40)
heap.edgeAdd(30,10)
heap.display()

heap.display()
console.log("hello")
console.log(heap.bsf(heap.list,10))

