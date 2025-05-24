import React from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-between h-16 mx-auto px-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/avatar.png" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span className="text-xl font-bold">Devareheard</span>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">Trang chủ</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about">Giới thiệu</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="outline">Đăng xuất</Button>
        </div>
      </header>
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
