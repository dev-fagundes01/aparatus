'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import SidebarMenu from './sidebar-menu'
import { MenuIcon, MessageCircleIcon } from 'lucide-react'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-5 py-4">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo Aparatus"
          width={60}
          height={26.09}
          className="object-contain"
        />
      </Link>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/chat">
            <MessageCircleIcon />
          </Link>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[315px] p-0">
            <SheetHeader className="border-b px-5 py-6 text-left">
              <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
            </SheetHeader>
            <SidebarMenu />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header
