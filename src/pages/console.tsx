import {useEffect, useState, useContext} from "react";
import {FirebaseContext} from "../utils/context";
import {useNavigate} from "react-router-dom";
import ConsolePage from "../components/pages/ConsolePage/ConsolePage";

function Console () {
  const { firebaseInitialised, user } = useContext(FirebaseContext)
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    setIsLoaded(false)
    if(firebaseInitialised) {
      setIsLoaded(true)
    }
  }, [firebaseInitialised])

  useEffect(() => {
    if(firebaseInitialised) {
      if(!user) {
        navigate('/')
      }
    }
  }, [firebaseInitialised, user])

  return <>
    {isLoaded && (
      <ConsolePage/>
    )}
  </>
}

export default Console
