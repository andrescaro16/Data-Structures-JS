//--------------------------[Adjacency Graph Implementation]---------------------------

class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }
    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}



//---------------------------[Non-directed graph Example]----------------------------

// View it here: https://i.ibb.co/mGTGFWM/image.png

const myGraph = new Graph();

// Nodes/Vertexes
myGraph.addVertex(1);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addVertex(8);

// Edges
myGraph.addEdge(8,4)
myGraph.addEdge(4,1)
myGraph.addEdge(1,3)
myGraph.addEdge(1,6)
myGraph.addEdge(3,6)
myGraph.addEdge(3,5)
myGraph.addEdge(5,4)

/*
    // RESULT:
    1: (3) [4, 3, 6]
    3: (3) [1, 6, 5]
    4: (3) [8, 1, 5]
    5: (2) [3, 4]
    6: (2) [1, 3]
    8: [4] 
*/