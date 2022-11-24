// @ts-nocheck
import { useEffect, useState, ReactNode } from "react"
import { auth } from "../../../utils/firebase"
import { FirebaseContext } from "../../../utils/context"
import { onAuthStateChanged } from 'firebase/auth';
import FirebaseCompact from "firebase/compat/index";
import {IFavoriteMovieInfo} from "../../../types/movies";
import {getFavorites} from "../../../services/firebase/favorites";

export default function FirebaseContainer({ children } : {children : ReactNode}) {
  const [firebaseInitialised, setFirebaseInitialised] = useState<boolean>(false)
  const [authUser, setAuthUser] = useState<FirebaseCompact.User | null>(null)
  const [favorites, setFavorites] = useState<IFavoriteMovieInfo[]>([])

  async function handleFetchFavorites () {
    const getFavoritesData = await getFavorites()
    setFavorites(getFavoritesData.docs.map(doc => doc.data()))
  }

  useEffect(() => {
    let authSession = () => {}
    let favoriteSession = () => {}

    authSession = onAuthStateChanged(auth, async (user : FirebaseCompact.User) => {
      if(user) {
        await handleFetchFavorites()
        setAuthUser(user)
      }

      setFirebaseInitialised(true)
    })

    return () => {
      authSession()
      favoriteSession()
    }
  }, [])

  return (
    <FirebaseContext.Provider
      value={{
        user: authUser,
        favorites,
        refreshFavorites: async () => {
          await handleFetchFavorites()
        },
        firebaseInitialised
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}
