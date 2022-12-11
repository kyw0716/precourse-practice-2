import { ViewString } from "../static/Static";

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

  printResultHeader() {
    const H4 = document.createElement("h4");

    H4.innerHTML = ViewString.RESULT_HEADER;

    this.#container.appendChild(H4);
  }

  printWinner(winner) {
    const H4 = document.createElement("h4");

    H4.innerHTML = `최종 우승자: ${winner
      .map((w) => `<span id="racing-winners">${w}</span>`)
      .join(", ")}`;

    this.#container.appendChild(H4);
  }
}

export default OutputView;
