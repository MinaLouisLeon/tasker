import {
  IonActionSheet,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import SideMenu from "../components/SideMenu";
import {
  trashOutline,
  closeOutline,
  sendOutline,
  createOutline,
} from "ionicons/icons";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import { useHistory } from "react-router";
const TaskListPage = () => {
  const viewMode = isMobile ? "" : "ios";
  const history = useHistory(null);
  const [showActionSheet, setShowActionSheet] = useState(false);
  return (
    <IonPage>
      <SideMenu />
      <IonHeader>
        <IonToolbar mode={viewMode}>
          <IonMenuButton slot="start" />
          <IonTitle>Tasks</IonTitle>
          <IonButtons slot="end">
            <IonButton color="primary" onClick={() => {
              history.replace("/addTask")
            }}>Add Task</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen id="enable-sidemenu">
        <IonList>
          {/* map all the tasks */}
          <IonItem button onClick={() => setShowActionSheet(true)}>
            <IonLabel>Task 1</IonLabel>
          </IonItem>
        </IonList>
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          header="Task 1"
          mode={viewMode}
          buttons={[
            {
              text: "Open",
              icon: isPlatform("android") ? sendOutline : "",
              handler: () => {
                history.push("/openTask")
              },
            },
            {
              text: "Edit",
              icon: isPlatform("android") ? createOutline : "",
              handler: () => {
                console.log("edit");
              },
            },
            {
              text: "Delete",
              icon: trashOutline,
              role: "destructive",
              handler: () => {
                console.log("delete");
              },
            },
            {
              text: "Cancel",
              icon: closeOutline,
              role: "cancel",
              handler: () => {
                console.log("cancel");
              },
            },
          ]}
        ></IonActionSheet>
      </IonContent>
    </IonPage>
  );
};

export default TaskListPage;
