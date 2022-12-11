import Car from "./Car.js";

class Cars {
  #allCars;
  #racingCount;

  constructor(carNamesInput) {
    const carNames = carNamesInput.split(",");
    this.validateCarNames(carNames);
    this.#allCars = carNames.map((name) => new Car(name));
  }

  validateCarNames(carNames) {
    if (carNames.filter((v) => v.length > 5).length > 0)
      throw new Error("글자 수가 5자 이상인 자동차 이름이 포함되어 있습니다.");

    if (carNames.filter((v) => v.length === 0).length > 0)
      throw new Error("글자 수가 0자인 자동차 이름이 포함되어 있습니다.");
  }

  validateRacingCount(racingCount) {
    if (racingCount.length === 0) throw new Error("입력값이 없습니다.");
    if (this.#allCars === undefined)
      throw new Error("자동차의 이름이 없습니다.");
  }

  setRacingCount(racingCount) {
    this.validateRacingCount(racingCount);
    this.#racingCount = parseInt(racingCount);
  }

  getRacingCount() {
    return this.#racingCount;
  }

  getCarMoveState() {
    return this.#allCars.map((car) => [car.getName(), car.getMoveDistance()]);
  }

  race(randomNumberGenerator) {
    for (let i = 0; i < this.#allCars.length; i++) {
      const randomNumber = randomNumberGenerator(0, 9);

      if (randomNumber > 4) this.#allCars[i].move();
    }
  }
}

export default Cars;
