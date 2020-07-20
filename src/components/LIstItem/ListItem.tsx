import React from "react";
import "./ListItem.css";
import { IonContent, IonList, IonLabel, IonItem, IonIcon } from "@ionic/react";
import { addOutline } from "ionicons/icons";
type ListProps = { item: string };
const ListItem: React.FC<ListProps> = ({ item }) => {
  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel class="action-button"> {item}</IonLabel>
          <IonIcon slot="start" icon={addOutline} />{" "}
        </IonItem>
      </IonList>
    </IonContent>
  );
};
export default ListItem;
