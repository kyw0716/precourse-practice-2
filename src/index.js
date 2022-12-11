import Cars from "./domain/Cars.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

class RacingGameController {
  #inputView = new InputView(
    this.inputCarNamesCallback.bind(this),
    this.inputRacingCountCallback.bind(this)
  );
  #outputView = new OutputView(document.querySelector("#app"));
  #cars;

  constructor() {}

  inputCarNamesCallback(input) {
    try {
      this.#cars = new Cars(input);
    } catch (error) {
      alert(error);
      this.#inputView.clearCarNamesInput();
    }
  }

  inputRacingCountCallback(input) {
    try {
      if (this.#cars === undefined) throw new Error("자동차 이름이 없습니다.");
      this.#cars.setRacingCount(input);
      this.racingStart();
    } catch (error) {
      alert(error);
      this.#inputView.clearRacingCountInput();
    }
  }

  racingStart() {
    for (let i = 0; i < this.#cars.getRacingCount(); i++) {
      this.#cars.race(MissionUtils.Random.pickNumberInRange);
      this.#outputView.printCarMoveState(this.#cars.getCarMoveState());
    }
  }
}

new RacingGameController();
