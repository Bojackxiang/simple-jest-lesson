class Counter {
  constructor(){
    this.number = 0;
  }

  add(){
    this.number += 1;
  }

  minus(){
    this.number -= 1;
  }

  addTwo(){
    this.number += 2;
  }

  minusTwo(){
    this.number -= 2;
  }
}

export default Counter;