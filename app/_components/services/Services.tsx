import service1 from '@/public/service1.svg'
import service2 from '@/public/service2.svg'
import service3 from '@/public/service3.svg'
import Service from './Service'
import { Cormorant_Garamond, Raleway } from 'next/font/google'

const services = [
    {
        title: 'wedding',
        price: 2999,
        image: service1
    },
    {
        title: 'portrait',
        price: 399,
        image: service2
    },
    {
        title: 'engagement',
        price: 1999,
        image: service3
    }
]

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", '500', '600','700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export default function Services() {
    return <main className='bg-white text-[#5B5B5B] py-40'>
        <h2 className={`${raleway.className} text-[28px] text-[#BBA085] text-center uppercase font-medium tracking-[0.2em]`}>Services</h2>
        <h3 className={`${cormorant.className} text-[64px] text-center`}>What I Offer</h3>
        <section className='flex justify-evenly items-center w-full bg-white'>
        {
            services.map(service => <Service service={service} />)
        }
    </section>
    </main>
}