import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { isMobile } from "react-device-detect";
import { useHistory } from "react-router";
const SideMenu = () => {
  const viewMode = isMobile ? "" : "ios";
  const history = useHistory(null);
  return (
    <IonMenu contentId="enable-sidemenu" mode={viewMode}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem
            button
            onClick={() => {
              history.replace("/home");
            }}
          >
            <IonLabel>Tasks</IonLabel>
          </IonItem>
          <IonItem
            button
            onClick={() => {
              history.replace("/addTask");
            }}
          >
            <IonLabel>Add Task</IonLabel>
          </IonItem>
          <IonItem color="danger">
            <IonLabel>Exit</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
