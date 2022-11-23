import AuthLayout from "../../layouts/Auth";
import {TextField} from "@mui/material";
import {RegisterButton} from "../RegisterPage/styles";
import {FormEvent, useMemo, useState} from "react";
import useForm from "../../../hooks/useForm";
import {register} from "../../../services/firebase/auth";
import {useNavigate} from "react-router-dom";
import {Alert} from "@mui/lab";

function RegisterPage () {
  const [registerLoading, setRegisterLoading] = useState<boolean>(false)
  const [isRegisterValid, setIsRegisterValid] = useState<boolean | null>(null)
  const [registerErrorMsg, setRegisterErrorMsg] = useState<string>('')

  const navigate = useNavigate()
  const [handleFieldChange, states, errors] = useForm({
    email: '',
    password: '',
    password_confirm: '',
  })

  function handleErrors(key : string) {
    if(errors && typeof errors[key] !== 'undefined') {
      return errors[key]
    }
    return []
  }
  async function handleRegister (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if(canSubmit) {
      setRegisterLoading(true)

      try {
        await register(states.email, states.password)
        setIsRegisterValid(true)
        setRegisterLoading(false)
        return navigate('/console');
      } catch (e : any) {
        if(e.code === 'auth/email-already-in-use') {
          setRegisterErrorMsg('Email already registered!')
        } else if(e.code === 'auth/weak-password') {
          setRegisterErrorMsg('Please input strong password!')
        }
        setRegisterLoading(false)
        setIsRegisterValid(false)
      }
    }
  }
  const canSubmit = useMemo(() => {
    let isValid = true

    if(handleErrors('email').length > 0 || !states.email) {
      isValid = false
    } else if(handleErrors('password').length > 0 || !states.password) {
      isValid = false
    } else if(handleErrors('password_confirm').length > 0 || !states.password_confirm) {
      isValid = false
    }

    return isValid
  }, [errors, states])
  return (
    <AuthLayout title="Sign Up">
      {isRegisterValid !== null && !isRegisterValid && (
        <Alert severity="error">{registerErrorMsg}</Alert>
      )}
      <form onSubmit={handleRegister}>
        <TextField
          disabled={registerLoading}
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
          disabled={registerLoading}
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
        <TextField
          disabled={registerLoading}
          fullWidth
          value={states.password_confirm}
          error={handleErrors('password_confirm').length > 0}
          helperText={handleErrors('password_confirm')[0]}
          onChange={e => handleFieldChange('password_confirm', e.target.value, {
            rules: 'required|confirm:password'
          })}
          type="password"
          label="Confirmation Password"
          placeholder="Enter Confirm Password"
          margin="normal"
        />
        <RegisterButton
          loading={registerLoading}
          fullWidth
          style={{marginTop: 20}}
          variant="contained"
          type="submit"
        >
          Sign In
        </RegisterButton>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage
