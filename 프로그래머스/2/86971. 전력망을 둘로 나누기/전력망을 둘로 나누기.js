class Graph{
    constructor(){
        this.map = {}
    }
    
    addVertex(v){
        if(!this.map[v]){
            this.map[v] = [];
            return true;
        }
        return false;
    }
    
    addEdge(v1,v2){
        if(!this.map[v1]||!this.map[v2]){
            return false;
        }
        this.map[v1].push(v2);
        this.map[v2].push(v1);
        return true;
    }
    
    removeEdge(v1,v2){
        if(!this.map[v1]||!this.map[v2]){
            return false;
        }
        this.map[v1] = this.map[v1].filter(v=>v!==v2);
        this.map[v2] = this.map[v2].filter(v=>v!==v1);
    }
    
    count(v=1){
        const dfs = [v];
        const check = {};
        let count = 1;
        
        while(dfs.length){
            let vertex = dfs.pop();
            check[vertex] = true;
            
            for(let i=0; i<this.map[vertex].length; i++){
                let vertex2 = this.map[vertex][i];
                if(check[vertex2]){
                    continue;
                }
                else{
                    dfs.push(vertex2);
                    count++;
                }
            }
        }
        return count;
    }
}

function createGraph(n, wires){
    const graph = new Graph();
    for(let i=1; i<=n; i++){
        graph.addVertex(i);
    }
    for(let i=0; i<wires.length; i++){
        const [v1, v2] = [wires[i][0],wires[i][1]];
        graph.addEdge(v1,v2);
    }
    return graph
}


function solution(n, wires) {
    const answer = [];
    const graph = createGraph(n,wires);
    for(let i=0; i<wires.length; i++){
        let [v1,v2] = [wires[i][0], wires[i][1]];
        graph.removeEdge(v1,v2);
        const c1 = graph.count(v1);
        const c2 = graph.count(v2);
        answer.push(Math.abs(c1-c2));
        graph.addEdge(v1,v2);
    }
    return answer.sort((a,b)=>a-b)[0];
}