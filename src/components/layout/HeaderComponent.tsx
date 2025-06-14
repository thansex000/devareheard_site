import React from "react";
import { useSelector } from "react-redux";
import { capitalizeEachWord } from "@/service/global";
import type { RootState } from "@/store";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/service/authService";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";

const HeaderComponent: React.FC<{ title: string }> = ({ title }) => {
  const logoutHandle = useLogout();

  const username = useSelector(
    (s: RootState) => s.userSlice.user?.username
  );

  return (
    <header className="w-full border-b bg-gradient-to-r from-slate-900 to-slate-700 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-semibold text-white tracking-wide">
            {capitalizeEachWord(title)}
          </span>
        </div>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="text-white hover:text-yellow-300 transition"
              >
                Trang chủ
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="text-white hover:text-yellow-300 transition"
              >
                Giới thiệu
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white rounded-md hover:text-yellow-300 focus:outline-none transition">
                  Learn Language
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-44 mt-2 rounded-lg  bg-white shadow-lg ring-1 ring-black/10 z-50 p-1"
                >
                  <DropdownMenuItem asChild >
                    <a
                      href="/language/learn-chinese"
                      className="block w-full px-3 py-2 text-sm text-gray-800 rounded-md hover:bg-slate-300 transition outline-none "
                    >
                      Chinese
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/language/learn-english"
                      className="outline-none block w-full px-3 py-2 text-sm text-gray-800 rounded-md hover:bg-slate-300 transition"
                    >
                      English
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/language/learn-vietnamese"
                      className="outline-none block w-full px-3 py-2 text-sm text-gray-800 rounded-md hover:bg-slate-300 transition"
                    >
                      Tiếng Việt
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghostWhite" className="text-white transition outline-none">
              {capitalizeEachWord(username)}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-44 mt-2 rounded-lg bg-white shadow-lg ring-1 ring-black/10 z-50 p-1"
          >
            <DropdownMenuItem className="flex items-center gap-2 text-sm text-gray-800 hover:bg-slate-100 cursor-pointer">
              <User className="w-4 h-4" />
              Hồ sơ cá nhân
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-sm text-gray-800 hover:bg-slate-100 cursor-pointer">
              <Settings className="w-4 h-4" />
              Cài đặt
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={logoutHandle}
              className="flex items-center gap-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Đăng xuất
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default HeaderComponent;
