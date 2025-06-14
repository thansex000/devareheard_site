import React from 'react'
import { Outlet } from 'react-router-dom'
// import { Button } from '@/components/ui/button'
// import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import HeaderComponent from '@/components/layout/HeaderComponent'

const MainLayout: React.FC = () => {


  return (

    // <div className="min-h-screen flex flex-col text-foreground">
    <div>
      {/* Header */}
      <HeaderComponent  title='welcom to devareheard' />

      <Separator />
      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Separator />
      {/* Footer */}
      <footer className="text-center text-xs text-muted-foreground py-4">
        &copy; 2025 Devareheard. Powered by Shadcn UI.
      </footer>
    </div>
  )
}

export default MainLayout
