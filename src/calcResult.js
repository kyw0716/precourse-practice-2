export default function calcResult({ setWinner, getWinner }) {
  const WinnerTextContainer =
    document.getElementById("racing-winners").parentNode;
  const title = WinnerTextContainer.previousElementSibling;
  const app = document.getElementById("app");

  WinnerTextContainer.style.display = `none`;
  title.style.display = `none`;

  this.state = {
    cars: [],
    repeatTime: 0,
    maxRate: 0,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    console.log("calcResult", this.state);
    for (let i = 0; i < this.state.repeatTime; i++) {
      eachRap();
    }
    setMaxRate();
    setWinner(returnWinnerNames());
    this.render();
    console.log(this.state);
  };

  this.render = () => {
    const container = document.createElement("div");
    for (let j = 1; j < this.state.repeatTime + 1; j++) {
      const rap = document.createElement("div");
      rap.style.marginBottom = `20px`;
      for (let i = 0; i < this.state.cars.length; i++) {
        const carMove = document.createElement("div");
        carMove.innerHTML = `${this.state.cars[i].name}: ${this.state.cars[i].moveRate[j]}`;
        rap.appendChild(carMove);
      }
      container.appendChild(rap);
    }
    app.insertBefore(container, WinnerTextContainer);
    WinnerTextContainer.style.display = `block`;
    WinnerTextContainer.children[0].innerHTML = `${getWinner().join(", ")}`;
  };

  const eachRap = () => {
    for (let i = 0; i < this.state.cars.length; i++) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) this.state.cars[i].addMoveRate();
      else this.state.cars[i].stopMoveRate();
    }
  };

  const setMaxRate = () => {
    let max = 0;
    for (let i = 0; i < this.state.cars.length; i++) {
      const finalMoveRate = this.state.cars[i].moveRate.at(-1).length;
      if (max < finalMoveRate) max = finalMoveRate;
    }
    this.state = {
      ...this.state,
      maxRate: max,
    };
    console.log(this.state.maxRate);
  };

  const returnWinnerNames = () => {
    let winner = [];
    this.state.cars.forEach((v) => {
      if (v.moveRate.at(-1).length === this.state.maxRate) winner.push(v.name);
    });
    console.log(winner);
    return winner;
  };
}
