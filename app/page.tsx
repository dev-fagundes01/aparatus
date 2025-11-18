import Image from 'next/image'
import Header from './_components/header'
import SearchInput from './_components/search-input'
import banner from '../public/banner.png'
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
