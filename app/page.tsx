import Image from 'next/image'
import Header from './_components/header'
import SearchInput from './_components/search-input'
import banner from '../public/banner.png'
import BookingItem from './_components/booking-item'
import { prisma } from '@/lib/prisma'
import BarbershopItem from './_components/barbershop-item'
import Footer from './_components/footer'
import {
  PageContainer,
  PageSection,
  PageSectionScroller,
  PageSectionTitle,
} from './_components/ui/page'

export default async function Home() {
  const recommendedBarbershop = await prisma.barberShop.findMany({
    orderBy: {
      id: 'asc',
    },
  })

  const popularBarbershop = await prisma.barberShop.findMany({
    orderBy: {
      id: 'desc',
    },
  })

  return (
    <>
      <Header />
      <PageContainer>
        <SearchInput />
        <Image
          src={banner}
          alt="Agenda agora"
          sizes="100vw"
          className="h-auto w-full"
        />

        <PageSection>
          <PageSectionTitle>Agendamentos</PageSectionTitle>
          <BookingItem
            serviceName="Corte de Cabelo"
            barbershopName="Barbearia do Zé"
            barbershopImageUrl="https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png"
            date={new Date()}
            status="confirmed"
          />
        </PageSection>

        <PageSection>
          <PageSectionTitle>Recomendados</PageSectionTitle>
          <PageSectionScroller>
            {recommendedBarbershop.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>

        <PageSection>
          <PageSectionTitle>Populares</PageSectionTitle>
          <PageSectionScroller>
            {popularBarbershop.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>
      </PageContainer>
      <Footer />
    </>
  )
}
