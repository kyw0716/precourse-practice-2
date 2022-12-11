class Car {
  #moveDistance = 0;
  #name;

  constructor(name) {
    this.#name = name;
  }

  move() {
    this.#moveDistance++;
  }

  getMoveDistance() {
    let move = "";

    for (let i = 0; i < this.#moveDistance; i++) {
      move += "-";
    }

    return move;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
