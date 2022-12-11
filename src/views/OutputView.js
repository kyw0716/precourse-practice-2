class OutputView {
  #container;

  constructor(container) {
    this.#container = container;
  }

  printCarMoveState(carMoveState) {
    const div = document.createElement("div");
    div.style.marginBottom = "15px";

    div.innerHTML = carMoveState
      .map((car) => {
        return `<span>${car[0]}: ${car[1]}</span>`;
      })
      .join("<br/>");

    this.#container.appendChild(div);
  }
}

export default OutputView;
