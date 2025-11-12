import Image from 'next/image';
import Header from './_components/header';
import SearchInput from './_components/search-input';
import banner from '../public/banner.png';
export default function Home() {
  return (
    <>
    <Header />
    <div className='space-y-5 px-5'>
    <SearchInput />
    <Image src={banner} alt='Agenda agora' 
    sizes='100vw'
    className='h-auto w-full'/> 
    </div>
    </>
  );
}
