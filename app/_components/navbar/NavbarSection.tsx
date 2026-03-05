import { Playfair_Display_SC } from "next/font/google";

const playfairDisplay = Playfair_Display_SC({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

export default function NavbarSection({ navLinks }: { navLinks: string[] }) {
  return (
    <section className="flex items-center justify-evenly w-full text-[#363636]">
      {navLinks.map((navLink) => (
        <article
          className={`uppercase font-[22px] ${playfairDisplay.className}`}
          key={navLink}
        >
          {navLink}
        </article>
      ))}
    </section>
  );
}
