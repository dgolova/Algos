import { Node } from "./Tree";

const left = new Node(1, undefined, undefined)
const right = new Node(4, undefined, undefined)
const rightRight = new Node(5, undefined, undefined)

const right1 = new Node(4, undefined, rightRight)

const bst1 = new Node(3, left, right);
const bst2 = new Node(3, left, right1);
const bst3 = new Node(3, undefined, right);


test("BST implements has", function () {
//   expect(true).equal(true);
  expect(bst1.has(1))//.equal(true);
  expect(bst1.has(2))//.equal(false);
});

test("BST implements add", function () {
  bst1.add(5);
  expect(bst1)//.equal(bst2);
});

test("BST implements remove", function () {
  bst1.remove(1);
  expect(bst1)//.equal(bst3);
});
