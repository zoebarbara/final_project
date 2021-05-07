import firebase from "firebase/app";
import "firebase/firestore";

let db;
function getDb() {
  if (!db) {
    db = firebase.firestore();
  }
  return db;
}

const formatResponse = (success, data) => {
  return { success, data }
}

export async function listCollection(collection) {
    try {

      const db = getDb();
      
      const querySnapshot = await db.collection(collection).get();
      const data = [];
      
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })  
      });
      return { success: true, data };
  
    } catch(error) {
      console.log('IMTCHLG ~ file: db.js ~ line 52 ~ listCollection ~ error', error);
      return { success: false };
    }
  }

  export async function createObjectWithId(collection, object, id) {
    try {
      const db = getDb();
      await db.collection(collection).doc(id).set(object);
      return formatResponse(true);
    } catch (error) {
      console.log('IMTCHLG ~ file: db.js ~ line 10 ~ createObjectWithId ~ error', error);
      return formatResponse(false);
    }
  }
  
  export async function getObjectById(collection, id) {
    try {
      const db = getDb();
      const doc = await db.collection(collection).doc(id).get();
      if (doc.exists) {
        const data = doc.data();
        return formatResponse(true, { ...data, id: doc.id });
      }
      return formatResponse(false, null);
    } catch (error) {
      console.log('IMTCHLG ~ file: db.js ~ line 20 ~ getObjectById ~ error', error);
      return formatResponse(false);
    }
  }
  