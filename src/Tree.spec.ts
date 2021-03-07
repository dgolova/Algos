import { Node } from "./Tree";

const left = new Node(1, undefined, undefined)
const right = new Node(4, undefined, undefined)
const rightRight = new Node(5, undefined, undefined)

const right1 = new Node(4, undefined, rightRight)

const bst1 = new Node(3, left, right); // (3 1 4)
const bst2 = new Node(3, left, right1); // (3 1 (4 () 5))
const bst3 = new Node(3, undefined, right1); //(3 (4 () 5)) no balancing

test("BST implements has", () => {
  // console.log(bst1);
  // console.log(bst1.left);
  // console.log(bst1.right);
  
  expect(bst1.has(3)).toBe(true);
  expect(bst1.has(4)).toBe(true);
  expect(bst1.has(1)).toBe(true);
  expect(bst1.has(2)).toBe(false);
});

test("BST implements add", () => {
  bst1.add(5);

  // console.log(bst1);
  
  expect(bst1).toEqual(bst2);
});

test("BST implements remove", () => {
  bst1.remove(1);

  // console.log(bst1);
  
  expect(bst1).toEqual(bst3);
});
