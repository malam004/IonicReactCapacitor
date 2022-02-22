import { IonButton } from "@ionic/react";
import React from "react";
import "./Button.css";

const Button = ({ fColor, className, value, onClick }) => {
  return (
    <IonButton
      style={{ color: fColor }}
      className={className}
      onClick={onClick}
    >
      {value}
    </IonButton>
  );
};

export default Button;
