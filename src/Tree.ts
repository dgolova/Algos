import { MySet } from "./ArraySet";

class Tree implements MySet {
  private hash(e: number): number {
    // though collisions, if occurred the resize should happen - slow
    return e % 100;
  }

  private myArray = new Array<number | undefined>(100);

  add(e: number) {
    // O(1)
    this.myArray[this.hash(e)] = e;
  }

  remove(e: number): void {
    // O(1)
    this.myArray[this.hash(e)] = undefined;
  }

  has(e: number): boolean {
    // O(1)
    return this.myArray[this.hash(e)] !== undefined;
  }
}

//implement set as BST, add remove and has with testing (don't worry about balancing)

// class Node {
//   private value: number;
//   private left: Node;
//   private right: Node;

//   constructor(value: number, left: Node, right: Node) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

export class Node implements MySet {
  value: number | undefined;
  left: Node | undefined;
  right: Node | undefined;

  constructor(value: number, left: Node | undefined, right: Node | undefined) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  // O(height) = O(log n)
  has(e: number): boolean {
    if (this.value === e) return true;

    if (this.value! > e && this.left !== undefined) {
      return this.left.has(e);
    }

    if (this.value! < e && this.right !== undefined) {
      return this.right.has(e);
    } else return false;
  }

  add(e: number): void { //this will not include duplicates
    if (this.value === undefined) this.value = e;
    else if (this.value > e) { //3<5
      if (this.left === undefined) this.left = new Node(e, undefined, undefined);
      else this.left.add(e)
    }
    else if (this.value < e) {
      if (this.right === undefined) this.right = new Node(e, undefined, undefined);
      else this.right.add(e)
    }
  }

  remove(e: number): void {
    if(this.value === e) this.value = undefined;

    else if (this.value! > e && this.left) {
      if (this.left.value === e) this.left = undefined
      else this.left.remove(e)
    }
    else if (this.value! < e && this.right) {
      if (this.right.value === e) this.right = undefined
      else this.right.remove(e)
    }
  }
}
