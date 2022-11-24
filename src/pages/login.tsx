import {useEffect, useState, useContext} from "react";
import {FirebaseContext} from "../utils/context";
import {useNavigate} from "react-router-dom";
import LoginPage from "../components/pages/LoginPage/LoginPage";

function Login () {
  const { firebaseInitialised, user } = useContext(FirebaseContext)
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    setIsLoaded(false)
    if(firebaseInitialised) {
      setIsLoaded(true)
      if(user) {
        navigate('/console')
      }
    }
  }, [firebaseInitialised, user])

  return <>
    {isLoaded && (
      <LoginPage/>
    )}
  </>
}

export default Login
