import {useState} from 'react';
import {IFormChangeOptions} from "./types";

export default function useForm(initialPayload : object) {
  const [states, setStates] = useState<object>({...initialPayload});
  const [errors, setErrors] = useState<object | null>(null);
  function handleValidate (key: string, options : IFormChangeOptions) {
    let isValidate : boolean = true
    const fieldErrors : string[] = []

    if(typeof options.type !== 'undefined') {
      if(options.type === 'email') {
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

        // @ts-ignore
        const email = states[key]

        if(email) {
          if(!regex.test(email.trim())) {
            fieldErrors.push('Please Input Correct Email!')
            isValidate = false
          }
        }
      }
    }

    return [isValidate, fieldErrors] as const
  }
  function handleChange (key : string, value : any, options? : IFormChangeOptions) {
    setStates({
      ...states,
      [key] : value
    })

    if(typeof options !== 'undefined') {
      const [, fieldErrors] = handleValidate(key, options)
      setErrors({...errors, [key] : fieldErrors})
    }
  }
  return [handleChange, states, errors] as const;
}
