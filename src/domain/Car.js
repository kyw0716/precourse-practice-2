class Car {
  #moveDistance = 0;
  #name;

  constructor(name) {
    this.#name = name;
  }

  move() {
    this.#moveDistance++;
  }

  getMoveDistanceForPrint() {
    let move = "";

    for (let i = 0; i < this.#moveDistance; i++) {
      move += "-";
    }

    return move;
  }

  getMoveDistanceForCalculate() {
    return this.#moveDistance;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
