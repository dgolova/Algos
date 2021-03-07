export interface MySet {
  add(e: number): void;
  remove(e: number): void;
  has(e: number): boolean;
}

class ArraySet implements MySet {
  private myArray: number[];

  constructor() {
    this.myArray = [];
  }

  add(e: number) {
    //const - O(1) // if the array is big enough, otherwise it should create a new array
    this.myArray.push(e);
  }

  remove(e: number): void {
    //linear - O(n)
    this.myArray.filter(i => i!==e);
  }

  has(e: number): boolean {
    //linear - O(n)
    for (let i of this.myArray) {
      if (i === e) return true;
    }
    return false;
  }
}
