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
    return this.#moveDistance;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
