import Image from "next/image";
import Header from "./_components/header";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";
import BookingItem from "./_components/booking-item";
import { prisma } from "@/lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import Footer from "./_components/footer";

export default async function Home() {
  const recommendedBarbershop = await prisma.barberShop.findMany({
    orderBy: {
      id: "asc",
    },
  });

  const popularBarbershop = await prisma.barberShop.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <>
      <Header />
      <div className="space-y-5 px-5">
        <SearchInput />
        <Image
          src={banner}
          alt="Agenda agora"
          sizes="100vw"
          className="h-auto w-full"
        />

        <h2 className="text-foreground text-xs font-semibold">Agendamentos</h2>
        <BookingItem
          serviceName="Corte de Cabelo"
          barbershopName="Barbearia do Zé"
          barbershopImageUrl="https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png"
          date={new Date()}
        />

        <h2 className="text-foreground text-xs font-semibold">Agendamentos</h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {recommendedBarbershop.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="text-foreground text-xs font-semibold">Agendamentos</h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershop.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
