import Car from "./Car.js";

class Cars {
  #allCars;

  constructor(carNamesInput) {
    const carNames = carNamesInput.split(",");
    this.validateCarNames(carNames);
    this.#allCars = carNames.map((name) => new Car(name));
    console.log(this.#allCars);
  }

  validateCarNames(carNames) {
    if (carNames.filter((v) => v.length > 5).length > 0)
      throw new Error(
        "[ERROR] 글자 수가 5자 이상인 자동차 이름이 포함되어 있습니다."
      );

    if (carNames.filter((v) => v.length === 0).length > 0)
      throw new Error(
        "[ERROR] 글자 수가 0자인 자동차 이름이 포함되어 있습니다."
      );
  }
}

export default Cars;
