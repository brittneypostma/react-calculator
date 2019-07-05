import React from "react";
import { Screen } from "./Screen";
import { Button } from "./Button";
import "../styles/styles.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      equation: "",
      clickedNumber: false,
      startsWithDecimal: false,
      hasZero: true,
      hasOperator: false,
      hasDecimal: false
    };
  }

  handleNumber = num => {
    if (!this.state.clickedNumber && num.target.innerText !== "0") {
      this.setState({
        display: num.target.innerText,
        equation: num.target.innerText,
        clickedNumber: true,
        clickedOperator: false,
        onDecimal: false
      });
    } else if (this.state.clickedNumber) {
      this.setState({
        display: this.state.display + num.target.innerText,
        equation: this.state.display + num.target.innerText,
        clickedOperator: false
      });
    }
  };

  handleClear = () =>
    this.setState({
      display: 0,
      equation: "",
      clickedNumber: false,
      hasOperator: false,
      hasDecimal: false
    });

  handleOperator = operator => {
    if (!this.state.clickedOperator) {
      this.setState({
        display: this.state.display + operator.target.innerText,
        equation: this.state.display + operator.target.innerText,
        clickedOperator: true,
        hasDecimal: false
      });
    } else {
      let arr = this.state.display.split("");
      arr.splice(arr.length - 1, 1, operator.target.innerText);
      this.setState({
        display: arr.join(""),
        equation: arr.join("")
      });
    }
  };

  handleEquals = eq => {
    function makingRequestedOperation(arr, operIndex, oper) {
      let num1 = [];
      let num2 = [];
      let info = {};
      let result;
      for (var i = parseInt(operIndex) - 1; i > -1; i--) {
        if (!isNaN(arr[i]) || arr[i] === ".") {
          num1.push(arr[i]);
          info.firstNumIndex = i;
        } else if (isNaN(arr[i]) && arr[i] !== ".") {
          break;
        }
      }
      num1.reverse();
      for (var i = parseInt(operIndex) + 1; i < arr.length; i++) {
        if (!isNaN(arr[i]) || arr[i] === ".") {
          num2.push(arr[i]);
          info.lastNumIndex = i;
        } else if (isNaN(arr[i]) && arr[i] !== ".") {
          break;
        }
      }
      const deleteCount = num1.concat(oper, num2);
      let operator1 = num1.join("");
      let operator2 = num2.join("");
      if (oper === "+") {
        result = parseFloat(operator1) + parseFloat(operator2);
      } else if (oper === "-") {
        result = parseFloat(operator1) - parseFloat(operator2);
      } else if (oper === "*") {
        result = parseFloat(operator1) * parseFloat(operator2);
      } else if (oper === "/") {
        result = parseFloat(operator1) / parseFloat(operator2);
      }
      info.result = result;
      arr.splice(info.firstNumIndex, deleteCount.length, info.result);
      return arr;
    }
    let arr = this.state.display.split("");
    while (arr.length > 1) {
      let sumIndex = arr.indexOf("+");
      let divIndex = arr.indexOf("/");
      let multIndex = arr.indexOf("*");
      let subIndex = arr.indexOf("-");
      if (divIndex > 0 && multIndex > 0) {
        if (divIndex < multIndex) {
          arr = makingRequestedOperation(arr, divIndex, "/");
        } else {
          arr = makingRequestedOperation(arr, multIndex, "*");
        }
      } else {
        if (divIndex > 0) {
          arr = makingRequestedOperation(arr, divIndex, "/");
        } else if (multIndex > 0) {
          arr = makingRequestedOperation(arr, multIndex, "*");
        } else if (sumIndex > 0 && subIndex > 0) {
          if (sumIndex < subIndex) {
            arr = makingRequestedOperation(arr, sumIndex, "+");
          } else {
            arr = makingRequestedOperation(arr, subIndex, "-");
          }
        } else if (subIndex > 0) {
          arr = makingRequestedOperation(arr, subIndex, "-");
        } else {
          arr = makingRequestedOperation(arr, sumIndex, "+");
        }
      }
    }

    arr = Math.round(arr * 100000) / 100000;

    this.setState({
      display: arr.toString()
    });
  };

  handleDecimal = dot => {
    if (!this.state.hasDecimal) {
      this.setState({
        display: this.state.display + dot.target.innerText,
        equation: this.state.display + dot.target.innerText,
        hasDecimal: true,
        clickedNumber: true
      });
    }
  };

  render() {
    const arrBtns = [
      {
        id: "nine",
        content: "9"
      },
      {
        id: "eight",
        content: "8"
      },
      {
        id: "seven",
        content: "7"
      },
      {
        id: "six",
        content: "6"
      },
      {
        id: "five",
        content: "5"
      },
      {
        id: "four",
        content: "4"
      },
      {
        id: "three",
        content: "3"
      },
      {
        id: "two",
        content: "2"
      },
      {
        id: "one",
        content: "1"
      },
      {
        id: "zero",
        content: "0"
      }
    ];
    const operators = [
      {
        id: "add",
        content: "+"
      },
      {
        id: "subtract",
        content: "-"
      },
      {
        id: "multiply",
        content: "*"
      },
      {
        id: "divide",
        content: "/"
      }
    ];
    return (
      <div className="calculator">
        <Screen equation={this.state.equation} content={this.state.display} />
        <div className="Buttons">
          {operators.map((btn, index) => {
            return (
              <Button
                className="operators"
                key={`operator_${index}`}
                name={btn.content}
                id={btn.id}
                onClick={this.handleOperator}
              />
            );
          })}
          {arrBtns.map((number, index) => (
            <Button
              className="numbers"
              key={index}
              name={number.content}
              id={number.id}
              onClick={this.handleNumber}
            />
          ))}

          <Button id="decimal" name="." onClick={this.handleDecimal} />

          <Button id="clear" name="CE" onClick={this.handleClear} />

          <Button id="equals" name={"="} onClick={this.handleEquals} />
        </div>
      </div>
    );
  }
}

export default Calculator;
