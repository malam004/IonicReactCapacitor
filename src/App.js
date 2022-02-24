import React, { useState } from "react";

import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import IonMenus from "./components/IonMenu";

const btnValues = [
  ["C", "", "/", "X"],
  [7, 8, 9, "-"],
  [4, 5, 6, "+"],
  [1, 2, 3, "="],
  [0, ".", "L"]
];

const regLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const App = () => {
  let [calc, setCalc] = useState({
    sign: "",
    num: "",
    res: "",
    log: ""
  });

  const [data, setData] = useState("white");

  const childToParent = (childdata) => {
    setData(childdata);
  };

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? regLocaleString(Number(removeSpaces(calc.num + value)))
            : regLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res
      });
    }
  };

  const dotClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num
    });
  };

  const signClickHandler = (e) => {
    setCalc({
      ...calc,
      sign: e.target.innerHTML,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : regLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
        log:
          calc.log +
          "L:" +
          regLocaleString(
            math(
              Number(removeSpaces(calc.res)),
              Number(removeSpaces(calc.num)),
              calc.sign
            )
          ) +
          "-"
      });
    }
  };

  const logClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: calc.log,
      log: calc.log
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0
    });
  };

  return (
    <React.Fragment>
      <Wrapper>
        <IonMenus childToParent={childToParent} />
        <Screen value={calc.num ? calc.num : calc.res} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                fColor={data}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={
                  btn === "C"
                    ? resetClickHandler
                    : btn === "="
                    ? equalsClickHandler
                    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                    ? signClickHandler
                    : btn === "."
                    ? dotClickHandler
                    : btn === "L"
                    ? logClickHandler
                    : numClickHandler
                }
              />
            );
          })}
        </ButtonBox>
      </Wrapper>
    </React.Fragment>
  );
};

export default App;
