import Cars from "./domain/Cars.js";
import InputView from "./views/InputView.js";

class RacingGameController {
  #inputView = new InputView(this.inputCarNamesCallback.bind(this));
  #cars;

  constructor() {}

  inputCarNamesCallback(input) {
    try {
      this.#cars = new Cars(input);
      console.log(this.#cars);
    } catch (error) {
      alert(error);
      this.#inputView.clearCarNamesInput();
    }
  }

  inputRacingCountCallback() {}
}

new RacingGameController();
