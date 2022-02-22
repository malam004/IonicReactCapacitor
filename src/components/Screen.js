import { IonInput } from "@ionic/react";
import React from "react";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <IonInput className="screen" mode="single" max={70}>
      {value}
    </IonInput>
  );
};

export default Screen;
