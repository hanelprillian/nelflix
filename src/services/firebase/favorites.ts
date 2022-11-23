import {collection, deleteDoc, doc, getDocs, query, setDoc, where} from "firebase/firestore"
import {auth, db} from "../../utils/firebase";
import {IMovieInfo} from "../../types/movies";

export async function getFavorite () {
  const uuid = auth.currentUser?.uid
  const favoriteQuery = query(
    collection(db, 'favorites'),
    where('uuid', '==', uuid),
  )
  return getDocs(favoriteQuery)
}
export async function syncFavorite (movie : IMovieInfo) {
  const uuid = auth.currentUser?.uid
  const favoriteQuery = query(
    collection(db, 'favorites'),
    where('uuid', '==', uuid),
    where('movieId', '==', movie.id),
  )

  const favoriteQueryDocs = await getDocs(favoriteQuery)

  if(favoriteQueryDocs.docs.length > 0) {
    return deleteDoc(doc(db, "favorites", `${uuid}-${movie.id}`));
  }

  return setDoc(doc(db, "favorites", `${uuid}-${movie.id}`), {
    uuid,
    movieId: movie.id,
    movieData: movie
  });
}
