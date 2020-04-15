// Importing only required components
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD_baPVvs0PEk0qw5nl4LZHmBkVqDtgCyo",
  authDomain: "my-shop-db-63411.firebaseapp.com",
  databaseURL: "https://my-shop-db-63411.firebaseio.com",
  projectId: "my-shop-db-63411",
  storageBucket: "my-shop-db-63411.appspot.com",
  messagingSenderId: "734089565368",
  appId: "1:734089565368:web:d916be443c942a8784d04d",
  measurementId: "G-CWDNXNKDYY"
};

firebase.initializeApp(config);

// Export firebase authentication method
export const auth = firebase.auth();
// Export firebase database method
export const firestore = firebase.firestore();

// Implementing Google authentication
const provider = new firebase.auth.GoogleAuthProvider();
// For google pop up window (sign-in and sign-up)
provider.setCustomParameters({ prompt: 'select_account' });

// A function wich will create new user
export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  // Try to send new user's data to firebase and look at the response
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const resSnapShot = await userRef.get();

  // If there is no data - create new user
  if (!resSnapShot.exists) {
    // Get required data from userAuth object
    const { displayName, email } = userAuth;
    const createDate = new Date();

    // Write user's data to DB asyncronously
    try {
      // Create new object
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  // Get user's data for future use in the application
  return userRef;
}

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
