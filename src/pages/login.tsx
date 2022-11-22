import {useEffect, useState, useContext} from "react";
import {FirebaseContext} from "../utils/context";
import {useNavigate} from "react-router-dom";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import {signOut} from "firebase/auth";
import {auth} from "../utils/firebase";

function Login () {
  const { firebaseInitialised, user } = useContext(FirebaseContext)
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  // for testing
  // useEffect(() => {
  //   signOut(auth)
  // }, [])
  useEffect(() => {
    setIsLoaded(false)
    if(firebaseInitialised) {
      setIsLoaded(true)
    }
  }, [firebaseInitialised])

  useEffect(() => {
    if(firebaseInitialised && user) {
      navigate('/console')
    }
  }, [firebaseInitialised, user])

  return <>
    {isLoaded && (
      <LoginPage/>
    )}
  </>
}

export default Login
