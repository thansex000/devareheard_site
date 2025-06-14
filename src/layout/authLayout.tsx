import React from 'react'
import { Outlet } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b bg-blue-600 text-white">
        <div className="container mx-auto flex items-center h-16 px-4">
          <h1 className="text-xl font-bold">Đăng nhập / Đăng ký</h1>
        </div>
      </header>
      <Separator />
      <main >
          <Outlet />
      </main>
      <Separator />
      <footer className="bg-gray-200 text-center text-xs text-muted-foreground py-4">
        &copy; 2025 Devareheard
      </footer>
    </div>
  )
}

export default AuthLayout
