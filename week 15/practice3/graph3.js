class graph{
    constructor(){
        this.list={}
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=new Set()
        }
    }
    addEdges(vertex1,vertex2){
        if(!this.list[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.list[vertex2]){
            this.addVertex(vertex2)        }
        this.list[vertex2].add(vertex1)  
        this.list[vertex1].add(vertex2)
    }
    deleteEdge(vertex1,vertex2){
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.list[vertex]){
            return
        }
        for(ver of this.list[vertex]){
            this.deleteEdge(ver,vertex)
        }

    }
    display(){
        for(let ver in this.list){
            console.log(ver+"=>"+[...this.list[ver]])
        }
    }
    bfs(graph,start){
        let result=[]
        let visited=new Set()
        let queue=[start]
        while(queue.length){
            let vertex=queue.shift()
            if(!visited.has(vertex)){
                visited.add(vertex)
                result.push(vertex)
         
            for(let ver of graph[vertex]){
                queue.push(ver)
            }
        }
        }
        return result
    }
    
  
    
}
const graph1=new graph()
graph1.addEdges(10,20)
graph1.addEdges(10,30)
graph1.addEdges(20,30)
graph1.display()
console.log(graph1.bfs(graph1.list,20))