import AuthLayout from "../components/layouts/Auth";
import {TextField} from "@mui/material";
import useForm from "../hooks/useForm";
import {useEffect, useMemo, FormEvent, useState, useContext} from "react";
import {AuthButton,RegisterButtonLink,LoginGoogleButton,Divider} from "../components/pages/LoginPage/styles"
import { signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from "../utils/firebase"
import {FirebaseContext} from "../utils/context";
import {useNavigate} from "react-router-dom";
import {Alert} from "@mui/lab";

function Login () {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [loginLoading, setLoginLoading] = useState<boolean>(false)
  const [isLoginValid, setIsLoginValid] = useState<boolean | null>(null)
  const { firebaseInitialised, user } = useContext(FirebaseContext)
  const navigate = useNavigate()
  const [handleFieldChange, states, errors] = useForm({
    email: '',
    password: '',
  })

  function handleErrors(key : string) {
    if(errors && typeof errors[key] !== 'undefined') {
      return errors[key]
    }
    return []
  }
  async function handleLoginGoogle () {
    setLoginLoading(true)
    const signInPopup = await signInWithPopup(auth, new GoogleAuthProvider())
    if(signInPopup.user) {
      return navigate('/');
    }
    setLoginLoading(false)
  }
  function handleGotoRegister () {
    return navigate('/register');
  }
  async function handleLogin (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if(canSubmit) {
      setLoginLoading(true)

      try {
        await signInWithEmailAndPassword(auth, states.email, states.password)
        setIsLoginValid(true)
        setLoginLoading(false)
      } catch (e) {
        setLoginLoading(false)
        setIsLoginValid(false)
      }
    }
  }
  const canSubmit = useMemo(() => {
    let isValid = true

    if(handleErrors('email').length > 0 || !states.email) {
      isValid = false
    } else if(handleErrors('password').length > 0 || !states.password) {
      isValid = false
    }

    return isValid
  }, [errors, states])

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

  return (
    <AuthLayout title="Sign In">
      {isLoaded && (
        <>
          {isLoginValid !== null && !isLoginValid && (
            <Alert severity="error">Wrong Username or Password!</Alert>
          )}
          <form onSubmit={handleLogin}>
            <TextField
              disabled={loginLoading}
              value={states.email}
              fullWidth
              type="email"
              label="Email"
              onChange={e => handleFieldChange('email', e.target.value, {
                rules: 'required|email'
              })}
              error={handleErrors('email').length > 0}
              helperText={handleErrors('email')[0]}
              placeholder="Enter Email"
              margin="normal"
            />
            <TextField
              disabled={loginLoading}
              fullWidth
              value={states.password}
              error={handleErrors('password').length > 0}
              helperText={handleErrors('password')[0]}
              onChange={e => handleFieldChange('password', e.target.value, {
                rules: 'required|min:4'
              })}
              type="password"
              label="Password"
              placeholder="Enter Password"
              margin="normal"
            />
            <AuthButton
              loading={loginLoading}
              fullWidth
              style={{marginTop: 20}}
              variant="contained"
              type="submit"
            >
              Sign In
            </AuthButton>
          </form>
          <Divider/>
          <RegisterButtonLink
            onClick={() => handleGotoRegister()}
            fullWidth
            variant="outlined"
          >
            Register
          </RegisterButtonLink>
          <LoginGoogleButton
            onClick={() => handleLoginGoogle()}
            fullWidth
            style={{marginTop: 20}}
          >
            Login with google
          </LoginGoogleButton>
        </>
      )}
    </AuthLayout>
  )
}

export default Login
