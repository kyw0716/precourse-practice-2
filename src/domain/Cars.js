import { ErrorMsg, StaticValue } from "../static/Static.js";
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
    if (
      carNames.filter((v) => v.length > StaticValue.CAR_NAME_LENGTH).length > 0
    )
      throw new Error(ErrorMsg.INVALID_CAR_NAMES_LENGTH_OUT_OF_RANGE);

    if (carNames.filter((v) => v.length === 0).length > 0)
      throw new Error(ErrorMsg.INVALID_CAR_NAMES_EMPTY_INPUT);
  }

  validateRacingCount(racingCount) {
    if (racingCount.length === 0)
      throw new Error(ErrorMsg.INVALID_RACING_COUNT_EMPTY_INPUT);
  }

  setRacingCount(racingCount) {
    this.validateRacingCount(racingCount);
    this.#racingCount = parseInt(racingCount);
  }

  getRacingCount() {
    return this.#racingCount;
  }

  getCarMoveState() {
    return this.#allCars.map((car) => [
      car.getName(),
      car.getMoveDistanceForPrint(),
    ]);
  }

  race(randomNumberGenerator) {
    for (let i = 0; i < this.#allCars.length; i++) {
      const randomNumber = randomNumberGenerator(
        StaticValue.RANDOM_RANGE_START,
        StaticValue.RANDOM_RANGE_END
      );

      if (randomNumber > StaticValue.CAN_MOVE_COUNT) this.#allCars[i].move();
    }
  }

  getMaxDistance() {
    let maxDistance = 0;

    for (let i = 0; i < this.#allCars.length; i++) {
      const moveDistance = this.#allCars[i].getMoveDistanceForCalculate();
      if (maxDistance < moveDistance) maxDistance = moveDistance;
    }

    return maxDistance;
  }

  getWinner() {
    const maxDistance = this.getMaxDistance();
    const winner = [];

    for (let i = 0; i < this.#allCars.length; i++) {
      const moveDistance = this.#allCars[i].getMoveDistanceForCalculate();
      const carName = this.#allCars[i].getName();

      if (moveDistance === maxDistance) winner.push(carName);
    }

    return winner.sort();
  }
}

export default Cars;
