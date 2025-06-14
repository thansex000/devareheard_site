import { useState } from "react"

export function useForm<T>(initialValues: T ) {
  const [values, setValues] = useState<T>(initialValues) //{ username: "", password: "" }

  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const { id, value } = e.target // id : username  // value : hai
    setValues(prev => ({ ...prev, [id]: value })) 
  }

  const setFieldError = (field: keyof T, message: string) => {
    setErrors(prev => ({ ...prev, [field]: message }))
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
  }

  // check dựa trên arg 2 
  
  


  return { values, setValues, errors, setFieldError, handleChange, resetForm }
}