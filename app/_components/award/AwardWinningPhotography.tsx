import Image from "next/image";
import vector from "@/public/Vector.svg";
import { Raleway, Cormorant_Garamond } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
});

export default function AwardWinningPhotography() {
  return (
    <main className="bg-[#f4f4f4] w-full flex items-center justify-center flex-col min-h-120 py-20">
      <Image src={vector} alt="vector" width={66} height={98} />
      <h1 className="text-[#BBA085] text-[28px] tracking-widest">
        AWARD WINNING PHOTOGRAPHY
      </h1>
      <h3 className={`text-[#4F4F4F] text-[64px] ${cormorant.className} text-center`}>
        Showcasing your big day in a memorable <br /> and unforgettable way.
      </h3>
    </main>
  );
}
