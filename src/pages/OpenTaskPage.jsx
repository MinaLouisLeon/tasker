import {
  IonActionSheet,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { isPlatform } from "@ionic/core";
import { createOutline, trashOutline, closeOutline } from "ionicons/icons";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { actionAddNote } from "../actions";
const OpenTaskPage = () => {
  const dispatch = useDispatch(null);
  const { id } = useParams();
  const tasksData = useSelector((state) => state.tasksReducer.tasks);
  const viewMode = isMobile ? "" : "ios";
  const [showAddNote, setShowAddNote] = useState({
    show: false,
    disableBackButton: false,
  });
  const [newNote, setNewNote] = useState("");
  const [showActionSheet, setShowActionSheet] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newNote);
    dispatch(actionAddNote(id, newNote));
    setShowAddNote({ show: false, disableBackButton: false });
    setNewNote("");
  };
  // show notes card function
  const handleAllNotes = () => {
    if (tasksData[id].noteIndex === 0) {
      return <></>;
    } else {
      return (
        <>
          {Object.keys(tasksData[id].taskNote).map((key) => {
            return (
                <IonCard button onClick={() => setShowActionSheet(true)}>
                  <IonCardContent>{tasksData[id].taskNote[key]}</IonCardContent>
                </IonCard>
            );
          })}
        </>
      );
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={viewMode}>
          <IonButtons slot="start">
            <IonBackButton disabled={showAddNote.disableBackButton} />
          </IonButtons>
          <IonTitle>Task Name</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton expand="block" color="success">
          Start Task
        </IonButton>
        {/* notes in task view */}
        {tasksData && handleAllNotes()}
        {/* show add note form on button click */}
        {showAddNote.show && (
          <IonCard className="pa2 ma2 shadow-2">
            <form onSubmit={handleSubmit}>
              <IonItem>
                <IonLabel>Note :</IonLabel>
                <IonTextarea
                  autoGrow={true}
                  cols={3}
                  inputMode="text"
                  placeholder="Note"
                  required
                  value={newNote}
                  onIonChange={(e) => setNewNote(e.detail.value)}
                />
              </IonItem>
              <IonButton expand="block" type="submit">
                Save Note
              </IonButton>
              <IonButton
                expand="block"
                color="danger"
                onClick={() => {
                  setShowAddNote({ show: false, disableBackButton: false });
                  setNewNote("");
                }}
              >
                Cancel
              </IonButton>
            </form>
          </IonCard>
        )}
        {/* show and hide the add note button */}
        {!showAddNote.show && (
          <IonButton
            expand="block"
            onClick={() =>
              setShowAddNote({ show: true, disableBackButton: true })
            }
          >
            Add Note
          </IonButton>
        )}
        {/* note options */}
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          mode={viewMode}
          buttons={[
            {
              text: "Edit Note",
              icon: isPlatform("android") ? createOutline : "",
              handler: () => {
                console.log("edit note");
              },
            },
            {
              text: "Delete Note",
              icon: trashOutline,
              role: "destructive",
              handler: () => {
                console.log("delete note");
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
        />
      </IonContent>
    </IonPage>
  );
};

export default OpenTaskPage;
