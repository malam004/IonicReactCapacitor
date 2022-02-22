import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import "./ButtonBox.css";

const ButtonBox = ({ children }) => {
  return (
    <IonGrid className="buttonBox">
      <IonRow>
        <IonCol>{children}</IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ButtonBox;
