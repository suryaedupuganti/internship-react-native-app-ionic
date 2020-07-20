import React from "react";
//import LoginPage from "./../src/pages/LoginPage/LoginPage";
import MenuPage from "./../src/pages/MenuPage/MenuPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { IonApp } from "@ionic/react";
import ListPage from "./pages/ListPage/ListPage";

const App: React.FC = () => {
  const items = ["Item1", "Item2", "Item3"];
  return (
    // <LoginPage></LoginPage>
    <IonApp>
      <MenuPage></MenuPage>
      <ListPage items={items}></ListPage>
    </IonApp>
  );
};
export default App;
