import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonApp,
  IonIcon,
  IonLabel,
  IonMenuToggle,
  IonRouterOutlet,
} from "@ionic/react";
import { menuOutline, warning, mail, paperPlane } from "ionicons/icons";
const MenuPage: React.FC = () => {
  return (
    <IonApp>
      <IonMenu contentId="main-content" side="start" menuId="first">
        <IonHeader>
          <IonToolbar>
            <IonIcon slot="start" icon={menuOutline} />
            <IonTitle>Start Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem routerLink="/inbox">
                <IonIcon icon={mail} slot="start"></IonIcon>
                <IonLabel>Menu Item</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/outbox">
                <IonIcon icon={paperPlane} slot="start"></IonIcon>
                <IonLabel>Menu Item</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/favorites">
                <IonIcon icon={mail} slot="start"></IonIcon>
                <IonLabel>Menu Item</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/archived">
                <IonIcon icon={mail} slot="start"></IonIcon>
                <IonLabel>Menu Item</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main-content"></IonRouterOutlet>
    </IonApp>
  );
};
export default MenuPage;
