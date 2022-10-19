export default function repeatTimeInput({ setRepeatTime }) {
  const InputElement = document.getElementById("racing-count-input");
  const FormElement = InputElement.parentNode;
  const h4 = FormElement.previousElementSibling;

  FormElement.style.display = `none`;
  h4.style.display = `none`;

  this.state = {
    repeatTime: 0,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
  };

  InputElement.addEventListener("keyup", (e) => {
    if (e.target.value <= 0 && e.target.value !== "") {
      alert("0 이상의 숫자를 입력해주세요!");
    } else {
      this.setState({
        repeatTime: e.target.value,
      });
    }
  });

  FormElement.addEventListener("submit", (e) => {
    e.preventDefault();
    setRepeatTime(this.state.repeatTime);
  });

  this.render = () => {
    FormElement.style.display = `block`;
    h4.style.display = `block`;
    InputElement.focus();
  };
}
