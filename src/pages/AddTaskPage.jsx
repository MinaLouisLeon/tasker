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
import { useDispatch ,useSelector} from "react-redux";
import { actionAddTask } from './../actions/index';
const AddTaskPage = () => {
  const dispatch = useDispatch(null);
  const history = useHistory(null);
  const [taskName, setTaskName] = useState("");
  const [taskNote,setTaskNote] = useState("");
  const uid = useSelector(state=>state.userReducer.userInfo.uid);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    const taskObj = {
      taskName : taskName,
      taskStatus : "opened",
      noteIndex : taskNote === "" ? 0 : 1,
      taskNote : taskNote === "" ? "" : {
        0 : {
          noteStatus : "opened",
          note : taskNote
        }
      }
    }
    if(uid !== ""){
    dispatch(actionAddTask(taskObj,uid));
    setTaskName("");
    setTaskNote("");
    history.replace("/home")
    }
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
              value={taskNote}
              onIonChange={(e) => setTaskNote(e.detail.value)}
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
