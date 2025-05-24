import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAccessToken } from "@/service/authService"
import { PATH } from "@/lib/config"

const ProtectedRoute: React.FC = () => {
  const accessToken = useAccessToken()
  if (!accessToken) {
    return <Navigate to={PATH.LOGIN} replace />
  }
  return <Outlet />
}

export default ProtectedRoute