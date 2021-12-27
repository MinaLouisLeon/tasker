import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar } from "@ionic/react"; 
import { isMobile } from "react-device-detect";
import { useState } from "react";
const OpenTaskPage = () => {
    const viewMode = isMobile ? "" : "ios" ;
    const [showAddNote,setShowAddNote] = useState({show : false,disableBackButton:false});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar mode={viewMode}>
                    <IonButtons slot="start">
                        <IonBackButton disabled={showAddNote.disableBackButton} />
                    </IonButtons>
                    <IonTitle>
                        Task Name
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardContent>
                        Note data
                    </IonCardContent>
                </IonCard>
                {showAddNote.show && <IonCard className="pa2 ma2 shadow-2">
                    <form onSubmit={handleSubmit}>
                    <IonItem>
                        <IonLabel>
                            Note :
                        </IonLabel>
                        <IonTextarea autoGrow={true} cols={3} inputMode="text" placeholder="Note" required />
                    </IonItem>
                    <IonButton expand="block" type="submit">
                        Save Note
                    </IonButton>
                    <IonButton expand="block" color="danger" onClick={() => setShowAddNote({show:false,disableBackButton:false})}>
                        Cancel
                    </IonButton>
                    </form>
                </IonCard>}
                {!showAddNote.show && <IonButton expand="block" onClick={() => setShowAddNote({show:true,disableBackButton:true})}>
                    Add Note
                </IonButton>}
            </IonContent>
        </IonPage>
    )
}

export default OpenTaskPage;