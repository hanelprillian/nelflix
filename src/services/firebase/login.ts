import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {auth} from "../../utils/firebase";

export async function login (username: string, password: string) {
  return signInWithEmailAndPassword(auth, username, password)
}
export async function loginWithGoogle () {
  return signInWithPopup(auth, new GoogleAuthProvider())
}
