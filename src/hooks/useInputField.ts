import { useState } from "react"

export function useInputField(initialValue: string = "") {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState<string | null>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setError(null)
  }

  return { value, setValue, error, setError, onChange }
}