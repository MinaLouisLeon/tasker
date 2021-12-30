import {db} from './firebaseConfig';
import { setDoc,doc,getDoc} from "firebase/firestore";

export const updateTasksFirestore = async (uid,data) => {
    console.log(uid)
    try {
        await setDoc(doc(db,uid,"tasks"),data);
    }
    catch (e) {
        console.log("error : ",e)
    }
}

export const getUsersTasksFromFirestore = async (uid) => {
    const docRef = doc(db,uid,"tasks");
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        return docSnap.data()
    }else{
        console.log("documents don't exist")
        return false
    }
}