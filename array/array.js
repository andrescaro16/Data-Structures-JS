// const array = ["Diego", "Karen", "Oscar"];

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length++] = item;    //save the data in the length position, after that, increment the length in 1
    return this.data;
  }
}

const myArray = new MyArray();