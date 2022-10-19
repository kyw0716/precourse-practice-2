import calcResult from "./calcResult.js";
import carNameInput from "./carNameInput.js";
import repeatTimeInput from "./repeatTimeInput.js";

export default function RacingGame() {
  this.state = {
    cars: [],
    repeatTime: 0,
    moveRate: [],
    winner: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    if (
      this.state.cars.length > 0 &&
      this.state.repeatTime > 0 &&
      nextState.cars !== CalcResult.state.cars &&
      nextState.repeatTime !== CalcResult.state.repeatTime
    )
      CalcResult.setState({
        cars: this.state.cars,
        repeatTime: this.state.repeatTime,
      });
    console.log(this.state);
  };

  const RepeatTime = new repeatTimeInput({
    setRepeatTime: (repeatTime) => {
      this.setState({
        repeatTime: Number(repeatTime),
      });
    },
  });

  const CarName = new carNameInput({
    renderRepeatTimeInput: () => RepeatTime.render(),
    setCarName: (carNames) => {
      this.setState({
        cars: carNames.map((v) => new Car(v)),
      });
    },
  });

  const CalcResult = new calcResult({
    setWinner: (winner) => {
      this.state = {
        ...this.state,
        winner: winner,
      };
    },
    getWinner: () => {
      return this.state.winner;
    },
  });
}

function Car(name) {
  this.name = name;
  this.moveRate = [""];
  this.addMoveRate = () => {
    this.moveRate.push(
      Array(this.moveRate.at(-1).length + 1)
        .fill("-")
        .join("")
    );
  };
  this.stopMoveRate = () => {
    this.moveRate.push(this.moveRate.at(-1));
  };
}

new RacingGame();
