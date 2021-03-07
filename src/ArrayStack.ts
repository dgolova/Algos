interface Stack {
  push(n: number): void;
  pop(): number | undefined;
}

class ArrayStack implements Stack {
  private arr: number[];
  private position: number;

  constructor() {
    this.arr = new Array(100).fill(0);
    this.position = 0;
  }

  push(n: number): void {
    this.arr[this.position] = n;
    this.position++;
  }

  pop(): number | undefined {
    if (this.position > 0) {
      this.position--;
      return this.arr[this.position];
    } else return undefined;
  }
}

const s1 = new ArrayStack();
s1.pop(); // undefined
s1.push(10); //void, position 1
s1.pop(); //10
