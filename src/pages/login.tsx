import AuthLayout from "../components/layouts/Auth";
import {Button, TextField} from "@mui/material";
import useForm from "../hooks/useForm";
import {useEffect} from "react";

function Login () {
  const [handleFieldChange, states, errors] = useForm({
    email: ''
  })
  function handleErrors(key : string) {
    if(errors && typeof errors[key] !== 'undefined') {
      return errors[key]
    }

    return []
  }
  useEffect(() => {
    console.log('states errors', errors)
  }, [errors])
  return (
    <AuthLayout title="Masuk">
      <form>
        <TextField
          value={states.email}
          error={handleErrors('email').length > 0}
          fullWidth
          required
          type="email"
          label="Email"
          onChange={e => handleFieldChange('email', e.target.value, {
            rules: 'required|email'
          })}
          placeholder="Masukkan Email"
          margin="normal"
        />
        <TextField
          fullWidth
          required
          type="password"
          label="Password"
          placeholder=""
          defaultValue=""
          margin="normal"
        />
      </form>
    </AuthLayout>
  )
}

export default Login
