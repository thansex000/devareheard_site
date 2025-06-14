import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type InputFieldProps = {
  id: string
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string | null
  autoComplete?: string
  placeholder?: string
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  autoComplete,
  placeholder,
}) => (
  <div>
    <Label htmlFor={id} className="text-sm font-medium">{label}</Label>
    <Input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className="mt-1"
    />
    {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
  </div>
)

export default InputField