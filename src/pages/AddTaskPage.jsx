import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
const AddTaskPage = () => {
  const history = useHistory(null);
  const [taskName, setTaskName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Task</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel>Task Name :</IonLabel>
            <IonInput
              placeholder="Task Name"
              clearInput={true}
              inputMode="text"
              required={true}
              value={taskName}
              onIonChange={(e) => setTaskName(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Note :</IonLabel>
            <IonTextarea
              autoGrow={true}
              cols={3}
              inputMode="text"
              placeholder="task note"
            />
          </IonItem>
          <IonButton expand="block" color="success" type="submit">
            Save
          </IonButton>
          <IonButton expand="block" color="danger" onClick={() => history.replace('/home')}>
            Cancel
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default AddTaskPage;
