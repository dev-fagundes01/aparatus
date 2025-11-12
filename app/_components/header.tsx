import Image from 'next/image'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'

function Header() {
 return (
  <header className='flex bg-white items-center justify-between px-5 py-6'>
    <Image
      src='/logo.svg'
      alt='Logo Aparatus'
      width={100}
      height={26.09}
      className='object-contain'
    />
    <Button variant='outline'>
      <MenuIcon />
    </Button>
  </header>
 )
}

export default Header