import AuthLayout from "../components/layouts/Auth";
import {TextField} from "@mui/material";
import useForm from "../hooks/useForm";
import {useEffect, useMemo, FormEvent} from "react";
import {AuthButton,RegisterButtonLink} from "../components/pages/LoginPage/styles"
function Login () {
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
  function handleLogin (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if(canSubmit) {

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

  return (
    <AuthLayout title="Masuk">
      <form onSubmit={handleLogin}>
        <TextField
          value={states.email}
          fullWidth
          type="email"
          label="Email"
          onChange={e => handleFieldChange('email', e.target.value, {
            rules: 'required|email'
          })}
          error={handleErrors('email').length > 0}
          helperText={handleErrors('email')[0]}
          placeholder="Masukkan Email"
          margin="normal"
        />
        <TextField
          fullWidth
          value={states.password}
          error={handleErrors('password').length > 0}
          helperText={handleErrors('password')[0]}
          onChange={e => handleFieldChange('password', e.target.value, {
            rules: 'required|min:4'
          })}
          type="password"
          label="Password"
          placeholder="Masukkan Password"
          margin="normal"
        />
        <AuthButton
          fullWidth
          style={{marginTop: 20}}
          variant="contained"
          type="submit"
        >
          Masuk
        </AuthButton>
      </form>
      <RegisterButtonLink
        fullWidth
        style={{marginTop: 20}}
        variant="outlined"
      >
        Register
      </RegisterButtonLink>
    </AuthLayout>
  )
}

export default Login
