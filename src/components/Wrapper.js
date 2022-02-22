import { IonApp, IonPage } from "@ionic/react";
import React from "react";
import "./Wrapper.css";

const Wrapper = ({ children }) => {
  return (
    <IonPage className="wrapper">
      <IonApp>{children}</IonApp>
    </IonPage>
  );
};

export default Wrapper;
