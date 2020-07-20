import "./Menu.css";

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from "@ionic/react";
import {
  bookmarkOutline,
  mailSharp,
  pizzaOutline,
  logOutOutline,
} from "ionicons/icons";
import React from "react";
import { useLocation } from "react-router-dom";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Ingredients",
    url: "/page/Home/Ingredients",
    iosIcon: pizzaOutline,
    mdIcon: pizzaOutline,
  },
];

const labels: string[] = [];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <IonMenu contentId="main" type="overlay">
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonTitle>Paticeille Online</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>
              Fethi Ouali
              <IonButton routerLink="/">
                <IonIcon slot="end" icon={logOutOutline} />
              </IonButton>
            </IonListHeader>

            <IonNote>hi@ionicframework.com</IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem
                    className={
                      location.pathname === appPage.url ? "selected" : ""
                    }
                    routerLink={appPage.url}
                    routerDirection="none"
                    lines="none"
                    detail={false}
                  >
                    <IonIcon
                      slot="start"
                      ios={appPage.iosIcon}
                      md={appPage.mdIcon}
                    />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>

          <IonList id="labels-list">
            {labels.length > 0 ? <IonListHeader>Labels</IonListHeader> : <></>}

            {labels.map((label, index) => (
              <IonItem lines="none" key={index}>
                <IonIcon slot="start" icon={bookmarkOutline} />
                <IonLabel>{label}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
