import React from "react"

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  children: React.ReactNode
}

const Form: React.FC<FormProps> = ({ children, ...props }) => (
  <form className="space-y-6" {...props}>
    {children}
  </form>
)

export default Form