// @ts-nocheck

import { useEffect, useState, ReactNode } from "react"
import { db, auth } from "../../../utils/firebase"
import { FirebaseContext } from "../../../utils/context"
import { onAuthStateChanged } from 'firebase/auth';
import FirebaseCompact from "firebase/compat/index";

export default function FirebaseContainer({ children } : {children : ReactNode}) {
  const [firebaseInitialised, setFirebaseInitialised] = useState<boolean>(false)
  const [authUser, setAuthUser] = useState<FirebaseCompact.User | null>(null)
  useEffect(() => {
    let authSession = () => {}

    authSession = onAuthStateChanged(auth, (user : FirebaseCompact.User) => {
      if(user) {
        setAuthUser(user)
      }

      setFirebaseInitialised(true)
    })

    return () => {
      authSession = null
    }
  }, [])

  return (
    <FirebaseContext.Provider
      value={{
        user: authUser,
        firebaseInitialised
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}
