import React from "react";
import "./ListItem.css";
import {
  IonContent,
  IonList,
  IonLabel,
  IonItem,
  IonButton,
  IonIcon,
} from "@ionic/react";

const ListItem: React.FC = () => {
  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel class="action-button"></IonLabel>
          <IonButton>
            <IonIcon slot="start" name="add"></IonIcon>Add Branch
          </IonButton>
        </IonItem>
      </IonList>
    </IonContent>
  );
};
export default ListItem;
