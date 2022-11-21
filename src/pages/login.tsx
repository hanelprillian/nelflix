import AuthLayout from "../components/layouts/Auth";
import {Button, TextField} from "@mui/material";
import useForm from "../hooks/useForm";
import {useEffect} from "react";

function Login () {
  const [handleChange, states, errors] = useForm({
    email: ''
  })
  useEffect(() => {
    console.log('states errors', errors)
  }, [errors])
  return (
    <AuthLayout title="Masuk">
      <form>
        <TextField
          fullWidth
          required
          type="email"
          label="Email"
          onChange={e => handleChange('email', e.target.value, {
            type: 'email'
          })}
          placeholder="Masukkan Email"
          defaultValue=""
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
