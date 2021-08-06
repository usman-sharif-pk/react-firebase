import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from '../config/firebase'

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = async () => {
  await auth.signInWithPopup(GoogleProvider)
}

export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return

  const { uid } = userAuth

  const userRef = firestore.doc(`users/${uid}`)

  const snapshop = userRef.get()

  if (!(await snapshop.exists)) {
    const { displayName, email } = userAuth
    const created_at = new Date()

    try {
      await userRef.set({ displayName, email, created_at, ...additionalData })
    } catch (error) {
      //   console.log('error block', error)
    }
  }

  return userRef
}
