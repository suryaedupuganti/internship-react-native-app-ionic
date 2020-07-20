import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { mailOutline } from "ionicons/icons";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface LoginProps extends RouteComponentProps {
  setLogin: (b: boolean) => void;
}
const LoginPage: React.FC<LoginProps> = ({ history }) => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Enter your E-mail ID</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Enter Your Password</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/home");
                }}
              >
                <IonIcon slot="start" />
                Login
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton>
                Forgot password
                <IonIcon slot="start" icon={mailOutline} />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};
export default LoginPage;
