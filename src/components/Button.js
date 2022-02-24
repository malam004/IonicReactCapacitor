import { IonButton } from "@ionic/react";
import React from "react";
import "./Button.css";

const Button = ({ fColor, className, value, onClick }) => {
  let bColor;
  if (
    value === "X" ||
    value === "/" ||
    value === "+" ||
    value === "-" ||
    value === "="
  )
    bColor = "#F57F17";
  else bColor = "#522a9e";
  return (
    <IonButton
      style={{ color: fColor, "--background": bColor }}
      className={className}
      onClick={onClick}
    >
      {value}
    </IonButton>
  );
};

export default Button;
