import { Ephesis } from "next/font/google";

const ephesis = Ephesis({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export default function Hero() {
  return (
    <main className="bg-[url('@/public/hero.png')] h-full grow bg-center -mt-20 bg-no-repeat z-0 bg-cover flex items-center justify-center text-7xl flex-col">
      <h1 className={`${ephesis.className} text-[#BBA085]`}>
        Your Dream Wedding Awaits
      </h1>
      <h2 className="text-7xl">Artistic Wedding Photography</h2>
    </main>
  );
}
