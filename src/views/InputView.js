class InputView {
  #carNamesInput;
  #racingCountInput;
  #carNamesForm;
  #racingCountForm;

  constructor(setCarNames, setRacingCount) {
    this.#carNamesInput = document.querySelector("#car-names-input");
    this.#racingCountInput = document.querySelector("#racing-count-input");
    this.#carNamesForm = document.querySelector("#car-names-input").parentNode;
    this.#racingCountForm = document.querySelector(
      "#racing-count-input"
    ).parentNode;

    this.#carNamesForm.addEventListener("submit", (event) => {
      event.preventDefault();
      setCarNames(event.target[0].value);
    });

    this.#racingCountForm.addEventListener("submit", (event) => {
      event.preventDefault();
      setRacingCount(event.target[0].value);
    });
  }

  clearCarNamesInput() {
    this.#carNamesInput.value = "";
  }

  clearRacingCountInput() {
    this.#racingCountInput.value = "";
  }
}

export default InputView;
