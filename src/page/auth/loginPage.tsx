import React, { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Form from "@/components/custom/Formcs"

import { useForm } from "@/hooks/useForm"
import { login } from "@/api/authApi"
import { useLogin } from "@/service/authService"
import InputField from "@/components/custom/Inputcs"


const LoginPage: React.FC = () => {
  const { values, handleChange, errors, setFieldError } = useForm({ username: "", password: "" }) 
  const loginHandler = useLogin()
  const btnLoginRef = useRef<HTMLAnchorElement>(null)
  



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await login(values)
      if (res.data) loginHandler(res.data)
    } catch (error) {// 
      setFieldError("username", error as string | '')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-indigo-700">Đăng nhập</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <InputField
              id="username"
              label="Tên đăng nhập"
              value={values.username}
              onChange={handleChange}
              error={errors.username}
              autoComplete="username"
              placeholder="your_username"
            />
            <InputField
              id="password"
              label="Mật khẩu"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              autoComplete="current-password"
              placeholder="••••••••"
            />
            <Button type="submit" className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700">
              Đăng nhập
            </Button>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Separator />
          <div className="text-center text-sm text-gray-500">
            Chưa có tài khoản?{" "}
            <a ref={btnLoginRef} href="/register" className="text-indigo-600 hover:underline font-medium">
              Đăng ký ngay
            </a>
          </div>
          <div className="text-center">
            <a href="/forgot-password" className="text-xs text-indigo-500 hover:underline">
              Quên mật khẩu?
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginPage