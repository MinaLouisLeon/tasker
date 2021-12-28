import {
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
              <IonCard>
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
      </IonContent>
    </IonPage>
  );
};

export default OpenTaskPage;
