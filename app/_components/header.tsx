'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import { LogInIcon, LogOutIcon, MenuIcon } from 'lucide-react'
import { authClient } from '@/lib/auth-client'

function Header() {
  const handleLogin = async () => {
    await authClient.signIn.social({ provider: 'google' })
  }
  const { data: session } = authClient.useSession()

  return (
    <header className="flex items-center justify-between bg-white px-5 py-6">
      <Image
        src="/logo.svg"
        alt="Logo Aparatus"
        width={100}
        height={26.09}
        className="object-contain"
      />
      <div className="flex items-center gap-2">
        {session ? (
          <>
            <h1 className="text-[0.55rem]">{session.user.name}</h1>
            <Button variant="outline" onClick={() => authClient.signOut()}>
              <LogOutIcon />
            </Button>
          </>
        ) : (
          <Button variant="outline" onClick={handleLogin}>
            <LogInIcon />
          </Button>
        )}
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </div>
    </header>
  )
}

export default Header
