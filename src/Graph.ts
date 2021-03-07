//Operations:
//- get a list of nodes,
//- check if there is node between two nodes,
//- given node, what are the neighbors
//v-vertices, e edges

// a node with a list of neighbors {1: [2], 2: [1], ...} - O(v), O(e), O(1)/O(e) - better for sparse
// EdgeList [(1,2), ...] - O(v), O(v*v) in array, O(e) - usually not good
// EdgeMatrix array[n][n] - O(v), O(1), O(v) - better for dense (uses the most memory)

//we start to care about memory

//implement a graph in one of the 1 implementation and implement the find method

//find a path
//nA : getNeighbors[] not nB
//getNei

// export class Node {
//   value: number;
//   neighborValues: number[];

//   constructor(value: number, neighborValues: number[]) {
//     this.value = value;
//     this.neighborValues = neighborValues;
//   }
// }

interface MyGraph {
  getNodes(): number[];
  getNeighbors(n: number): number[] | undefined;
  hasEdge(n1: number, n2: number): boolean;
  //findPath(n1: number, n2: number): number[] | undefined;
}

export class Graph implements MyGraph{ //no arrow graph, without self direction
  nodes: number[];
  edges: Map<number, number[]>;
  // edges: Map<number, Array<[number, number]>>;

  constructor(nodes: number[], edges: Map<number, number[]>) {
    this.nodes = nodes;
    this.edges = edges;
  }

  getNodes(): number[] {
    return this.nodes;
  }
  
  getNeighbors(n: number): number[] {
    return this.edges.get(n) ?? [];
  }

  hasEdge(n1: number, n2: number): boolean {
    if (this.edges.get(n1)?.find((n:number) => n === n2) !== undefined) return true //why if i change ! to ? it doesn't run? - works with upgraded version
    else return false
  }

  // the problem that it doesn't find the fastest path necessarily, and disconnected graph
  findPath(n1: number, n2: number): number[] | undefined { // DFS - depth first search
    let visited = new Set<number>();

    const helper = (current: number, path: number[]): number[]|undefined =>{ 
      if (visited.has(current)===true) return undefined //already checked - without it we'll have a stackOverflow   

      if (current===n2) return path; //success   

      visited.add(current) //mark it as checked
      for (let neighbor of this.getNeighbors(current) ?? []) { 
        const maybePath = helper(neighbor, [...path, neighbor]) //run the function on each children

        if (maybePath !== undefined) {
          return maybePath
        }       
      }
      return undefined
    }

    return helper(n1, [n1]);
  }

  // BFS with queue - breath first search, DFS with stack - depth first search
  findPath1(n1: number, n2: number): boolean {
    const visited = new Set<number>()
    const queue: number[] = []
    queue.push(n1);

    while (queue.length > 0) { // we simulate the stack of the programming language, benefits - more control
      const current = queue.shift() as number
      if (current === n2) return true
      if (visited.has(current)) continue
      visited.add(current)
      for (let neighbor of this.getNeighbors(current)) {
        queue.push(neighbor)
      }
    }

    return false
  }
}

  // findPath2(n1: number, n2: number): number[] | undefined {

  //   if (this.hasEdge(n1, n2)) return [n1, n2];
    
  //   let notVisited = this.edges
  //   let visited = [n1]
  //   const path = [n1]
    
  //   while(notVisited.keys.length > 0 && visited.length !== 0){ //check for the disconnected graph

  //     const nextNode = visited.shift()
  //     path.push(nextNode!) //path doesn't work properly, works only for 3 n1, n1,neighbor, neighbor of n1neighbor 

  //     notVisited.get(nextNode!)!.forEach(neighbor => {

  //       if (notVisited.get(neighbor)!==undefined) {
  //         if (this.hasEdge(neighbor, n2)) return [...path, neighbor, n2] //success
  //         else {
  //           visited.push(neighbor) //record the neighbor
  //           notVisited.delete(neighbor) //mark it as checked
  //         }
  //       }
  //     })
  //     path.pop()
  //   }
    
  //   return undefined
  // }

