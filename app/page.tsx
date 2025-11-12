import Image from 'next/image';
import Header from './_components/header';
import SearchInput from './_components/search-input';
import banner from '../public/banner.png';
import BookingItem from './_components/booking-item';
export default function Home() {
  return (
    <>
    <Header />
    <div className='space-y-5 px-5'>
    <SearchInput />
    <Image src={banner} alt='Agenda agora' 
    sizes='100vw'
    className='h-auto w-full'/> 
    <h2 className='text-xs text-foreground font-semibold'>Agendamentos</h2>
    <BookingItem 
    serviceName='Corte de Cabelo'
    barbershopName='Barbearia do Zé'
    barbershopImageUrl='https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png'
    date={new Date()}
     />
    
    </div>
    </>
  );
}
