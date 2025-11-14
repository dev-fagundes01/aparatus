import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

const BarbershopPage = async (props: PageProps<'/barbershops/[id]'>) => {
  const { id } = await props.params
  const barbershop = await prisma.barberShop.findUnique({
    where: { id },
  })

  if (!barbershop) notFound()

  return <h1>Barbershop {barbershop?.name}</h1>
}

export default BarbershopPage
