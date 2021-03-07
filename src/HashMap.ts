import { MySet } from "./ArraySet";

interface MyMap {
  get(key: number): number | undefined;
  set(key: number, value: number): void;
}

class HashSet implements MySet {
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
