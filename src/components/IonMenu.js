import React from "react";
import {
  IonMenu,
  IonHeader,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonApp,
  IonButton,
  IonToolbar,
  IonMenuButton,
} from "@ionic/react";
import { menuController } from "@ionic/core";

function IonMenus({ childToParent }) {
  function openMenu() {
    menuController.open();
  }

  return (
    <IonApp>
      <IonMenu side="start" content-id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonMenuButton expand="full" onClick={() => childToParent("red")}>
                Red
              </IonMenuButton>
            </IonItem>
            <IonItem>
              <IonMenuButton
                expand="full"
                onClick={() => childToParent("white")}
              >
                White
              </IonMenuButton>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <div className="ion-page" id="main-content">
        <IonHeader>
          <IonToolbar color="prmary">
            <IonButton slot="start">
              <IonMenuButton expand="block" onClick={openMenu}></IonMenuButton>
            </IonButton>
          </IonToolbar>
        </IonHeader>
      </div>
    </IonApp>
  );
}

export default IonMenus;
