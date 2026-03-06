import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Cormorant_Garamond, Ephesis } from "next/font/google";
import Image from "next/image";

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

export default function Service({service}: {service: {title: string; price: number; image: StaticImport}}) {
    return <section className="flex flex-col h-137.75 justify-center items-center text-[#585858] w-92.5 bg-[#f8f8f8]">
        <article className="flex flex-col gap-2 items-center">
            <Image src={service.image} alt={service.title} />
            <h2 className={`${ephesis.className} text-[60px] capitalize text-[#585858]`}>{service.title}</h2>
        </article>
        <article className={`${cormorant.className} flex flex-col gap-1`}>
            <h3 className="text-[24px]">Per session</h3>
            <h4 className="text-[48px]">${service.price}</h4>
        </article>
    </section>
}