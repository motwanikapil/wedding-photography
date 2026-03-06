import { Ephesis, Cormorant_Garamond } from "next/font/google";

const ephesis = Ephesis({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <main className="bg-[url('@/public/hero.png')] min-h-screen bg-center -mt-20 bg-no-repeat z-0 bg-cover flex items-center justify-center text-7xl flex-col gap-20">
      <h1 className={`${ephesis.className} text-[#BBA085]`}>
        Your Dream Wedding Awaits
      </h1>
      <h2 className={`text-7xl ${cormorant.className} font-bold`}>
        Artistic Wedding Photography
      </h2>
    </main>
  );
}
