import Image from "next/image";
import authorPhoto from "@/public/author.svg";
import flower from '@/public/flower.svg';
import { Cormorant_Garamond, Ephesis } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const ephesis = Ephesis({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export default function AuthorIntro() {
  return (
    <main className="flex items-center bg-white text-[#4A4A4A]">
      <section className="w-full"><Image src={authorPhoto} alt="author photo" className="object-cover"/></section>
      <section className="w-full flex flex-col gap-5 items-center justify-center">
        <h1 className={`${cormorant.className} text-[48px] text-center max-w-153.5 w-full`}>Hello, My Name is Tessa</h1>
        <article className={`text-[28px] ${cormorant.className} text-center max-w-153.5 w-full`}>
          Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
          tristique purus vehicula felis velit ac. Tempus velit morbi accumsan
          id sit interdum lacus turpis ac. Integer malesuada sagittis placerat
          eget.
        </article>
        <article className={`text-[28px] ${cormorant.className} text-center max-w-153.5 w-full`}>
          Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
          tristique purus vehicula felis velit ac. Tempus velit morbi accumsan
          id sit interdum lacus turpis ac. Integer malesuada sagittis placerat.
        </article>
        <Image src={flower} alt="flower" className="my-5 w-75.5 h-8" /> 
        <h4 className={`${ephesis.className} text-[60px]`}>Tessa.M</h4>
        <button className={`bg-[#E9E1D9] text-[#4A4A4A] px-8 py-2 ${cormorant.className} text-[28px]`}>Learn More</button>
      </section>
    </main>
  );
}
