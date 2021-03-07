GENERAL ADVICE
! - will throw exception if get(n1) is undefined, 
? - will just make this return undefined



TIME!, MEMORY, ENGINEERING SPEED) 
time: O(1) < O(log(n)) < O(n)
    constant < log time < linear
    

    
                THEORETICAL DATA STRUCTURES
SET
    (number of objects)
    operations: has/check, add, remove
    - has no order

MAP
    (mapping the objects)

LIST
    (order of objects)
    operations: has, add, remove, 
    - has a sense of order, focuses more of position of the element, 
    - can have duplicates

QUEUE 
    FIFO - first in first out
    operations: enqueue, dequeue

STACK 
    LIFO - last in first out
    operations: pop, push



                NON THEORETICAL DATA STATURES

ARRAY   - a set of objects?
    has(O(n)), add(O(1)), remove(O(n))

LINKED LIST - is empty list or single item connected to another list

HASHMAP - 
    has(O(1)), add(O(1)), remove(O(1))
    operations on hashmaps are amortized O(1)
    but problem of collision and resizing

GRAPH   - node/vertices (v) connected by edges (e)
    fully connected underacted graph (without self direction) - v vertices, e = (v*(v-1))/2
    directed graphs - directed edge - task management
    weighted graphs - distances in cities
    disconnected graph - where vertices are not connected
    Operations:
    - get a list of nodes, 
    - check if there is node between two nodes, 
    - given node, what are the neighbors
    mutating/change: add remove
    Implementation:
    - a node with a list of neighbors {1: [2], 2: [1], ...} - O(v), O(e), O(1)/O(e) - better for sparse
    - EdgeList [(1,2), ...] - O(v), O(v*v) in array, O(e) - usually not good
    - EdgeMatrix array[n][n] - O(v), O(1), O(v) - better for dense (uses the most memory)

TREE    - graph without a cycle, with a root; non-cyclical
BINARY TREE - each parent of a binary tree has only two nodes,
            - is either the root node or it is the node with two children who form binary trees (recursive definition)
COMPLEAT BINARY TREE    - symmetric

BINARY SEARCH TREE  - a binary tree where each node is bigger than all node in the left sub-tree
                        and smaller than the nodes/elements in the right sub-tree (no duplicates in this definition)
    has(O(log2(n)) / O(log(n))), add/remove(O(log2(n)))
    - depth of the compleat binary tree with n nodes is  log2(n)
    - add/remove - need to keep the tree balanced, otherwise search becomes slow - complex but fast
    - predictable timing compared to hashmaps

