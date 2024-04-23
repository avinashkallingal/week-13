class graph{
    constructor(){
        this.list={}
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=new Set();

        }
    }
    addEdge(vertex1,vertex2){
        if(!this.list[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.list[vertex2]){
            this.addVertex(vertex2)
        }
        this.list[vertex1].add(vertex2)
        this.list[vertex2].add(vertex1)
    }


    
    removeVertex(vertex){
        if(!this.list[vertex]){
            return
        }
        for(let ver of this.list[vertex]){
           this.removeEdge(ver,vertex)
        }
    }
    removeEdge(vertex1,vertex2){
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }

    display(){
        for(let vertex in this.list){
            console.log(vertex+"=>"+[...this.list[vertex]])
        }
    }

}
const gf=new graph()
gf.addEdge(10,20)
gf.addEdge(20,30)
gf.addEdge(10,30)
gf.addEdge(10,30)
gf.removeEdge(10,30)
gf.removeVertex(10)
gf.display()