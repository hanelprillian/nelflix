import {useState} from 'react';
import {IFormFieldChangeOptions, IFormFieldPayload} from "./types";

export default function useForm(initialPayload : object) {
  const [states, setStates] = useState<IFormFieldPayload>({...initialPayload});
  const [errors, setErrors] = useState<IFormFieldPayload | null>(null);

  function handleChange (key : string, value : any, options? : IFormFieldChangeOptions) {
    setStates({
      ...states,
      [key] : value
    })

    if(typeof options !== 'undefined') {
      const fieldErrors : string[] = []

      if(typeof options.rules !== 'undefined') {
        const rules = options.rules.split('|')
        for(const rule of rules) {
          if(rule === 'required') {
            if(typeof value === 'undefined' || value === '' || value === null) {
              fieldErrors.push('This field is required!')
            }
          }

          if(rule === 'email') {
            const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

            if(value) {
              if(!regex.test(value.toString().trim())) {
                fieldErrors.push('Please Input Correct Email!')
              }
            }
          }

          if(rule.includes(':')) {
            const [subRuleKey, subRuleValue] = rule.split(':')
            if(subRuleKey === 'min') {
              if(value && value.length < Number(subRuleValue)) {
                fieldErrors.push(`Minimum value is ${Number(subRuleValue)}`)
              }
            } else if(subRuleKey === 'confirm') {
              const firstField = value
              const secondField = states[subRuleValue]

              if((firstField && secondField) && (firstField !== secondField)) {
                fieldErrors.push(`Field must be same as ${subRuleValue}`)
              }
            }
          }
        }
      }

      setErrors({...errors, [key] : fieldErrors})
    }
  }

  return [handleChange, states, errors] as const;
}
