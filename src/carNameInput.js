export default function carNameInput({ renderRepeatTimeInput, setCarName }) {
  const InputElement = document.getElementById("car-names-input");
  const FormElement = InputElement.parentNode;

  this.state = {
    currentInput: "",
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
  };

  InputElement.addEventListener("keyup", (e) => {
    let carNameArray = e.target.value.split(",");
    for (let i = 0; i < carNameArray.length; i++) {
      if (carNameArray[i].length > 5) {
        alert("차량의 이름은 5글자 이상이 될 수 없습니다.");
        carNameArray = carNameArray.filter((v) => v.length <= 5);
        carNameArray = carNameArray.join(",");
        InputElement.value =
          carNameArray.length > 0 ? carNameArray + "," : carNameArray;
        break;
      }
    }
    this.setState({
      currentInput: e.target.value,
    });
  });

  FormElement.addEventListener("submit", (e) => {
    e.preventDefault();
    if (this.state.currentInput.length > 0) {
      setCarName(this.state.currentInput.split(",").filter((v) => v !== ""));
      renderRepeatTimeInput();
    }
  });
}
