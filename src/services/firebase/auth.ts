import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {auth} from "../../utils/firebase";

export async function login (username: string, password: string) {
  return signInWithEmailAndPassword(auth, username, password)
}
export async function loginWithGoogle () {
  return signInWithPopup(auth, new GoogleAuthProvider())
}
export async function register (username: string, password: string) {
  return createUserWithEmailAndPassword(auth, username, password)
}
export async function logout () {
  return signOut(auth)
}
