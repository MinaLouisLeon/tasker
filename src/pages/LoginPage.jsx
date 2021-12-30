import {
  IonAlert,
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { actionSetUser } from "../actions";
import { getUsersTasksFromFirestore } from "../api/firestoreFun";
import { actionSetTasksReducer } from './../actions/index';
const LoginPage = () => {
  let userInfo = null;
  const dispatch = useDispatch(null);
  const history = useHistory(null);
  const [showEmailVerificationAlert, setShowEmailVerificationAlert] =
    useState(false);
  const viewMode = isMobile ? "" : "ios";
  const getUserTask = async (uid) => {
    const userTasksResult = await getUsersTasksFromFirestore(uid);
    if(userTasksResult !== false){
      dispatch(actionSetTasksReducer(userTasksResult.tasks,userTasksResult.index));
    }
  }
  const uiConfig = {
    signInFlow: "redirect",
    // signInSuccessUrl: "/home",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        console.log(authResult);
        if (!authResult.user.emailVerified) {
          setShowEmailVerificationAlert(true);
        } else {
          userInfo = {
            uid: authResult.user.uid,
            displayName: authResult.user.displayName,
            email: authResult.user.email,
            phoneNumber: authResult.user.phoneNumber,
            photoURL: authResult.user.photoURL,
          };
          dispatch(actionSetUser(userInfo));
          getUserTask(authResult.user.uid);
          history.replace("/home");
        }

        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return false;
      },
    },
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={viewMode}>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className="login-main-container">
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
      </IonCard>
        <IonAlert
          isOpen={showEmailVerificationAlert}
          onDidDismiss={() => setShowEmailVerificationAlert(true)}
          header={"Email Verification"}
          message={
            "Email verification is needed to continue using this app, please check your email."
          }
          buttons={[
            {
              text: "OK",
              handler: () => {
                history.go(0);
              },
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
