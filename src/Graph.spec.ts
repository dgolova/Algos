import { Graph } from "./Graph";

const nodes = [1, 2, 3, 4]
let edges = new Map<number, number[]>()
edges.set(1, [2,3])
edges.set(2, [1,4])
edges.set(3, [1])
edges.set(4, [2])
const g = new Graph(nodes, edges)

test("Graph implements getNodes", () => {
  expect(g.getNodes()).toEqual(nodes);
});

test("Graph implements getNeighbors", () => {
  expect(g.getNeighbors(1)).toEqual([2,3])
});

test("Graph implements hasEdge", () => {
  expect(g.hasEdge(1, 2)).toBe(true)
  expect(g.hasEdge(1, 4)).toBe(false)
});

test("Graph implements findPath", () => {
  // console.log(g);
    
  expect(g.findPath(1, 4)).toEqual([1, 2, 4])
});
