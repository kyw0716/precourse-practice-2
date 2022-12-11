class InputView {
  #carNamesInput;
  #racingCountInput;
  #carNamesForm;
  #racingCountForm;
  #racingCountFormHeader;

  constructor(setCarNames, setRacingCount) {
    this.#carNamesInput = document.querySelector("#car-names-input");
    this.#racingCountInput = document.querySelector("#racing-count-input");
    this.#carNamesForm = document.querySelector("#car-names-input").parentNode;
    this.#racingCountForm = document.querySelector(
      "#racing-count-input"
    ).parentNode;
    this.#racingCountFormHeader = document.querySelector("h4");

    this.#carNamesForm.addEventListener("submit", (event) => {
      event.preventDefault();
      setCarNames(event.target[0].value);
    });

    this.#racingCountForm.addEventListener("submit", (event) => {
      event.preventDefault();
      setRacingCount(event.target[0].value);
    });

    this.hideRacingCountForm();
  }

  clearCarNamesInput() {
    this.#carNamesInput.value = "";
  }

  clearRacingCountInput() {
    this.#racingCountInput.value = "";
  }

  viewRacingCountForm() {
    this.#racingCountForm.style.display = "block";
    this.#racingCountFormHeader.style.display = "block";
  }

  hideRacingCountForm() {
    this.#racingCountForm.style.display = "none";
    this.#racingCountFormHeader.style.display = "none";
  }
}

export default InputView;
