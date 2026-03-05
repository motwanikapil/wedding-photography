import Image from "next/image";
import NavbarSection from "./NavbarSection";
import logo from "@/public/logo.png";

const left = ["home", "about", "services"];

const right = ["portfolio", "blog", "contact"];

export default function Navbar() {
  return (
    <main className="bg-[#f5f5f5cc] w-full z-10">
      <section className="max-w-300 mx-auto flex items-center justify-between">
        <NavbarSection navLinks={left} />
        <Image src={logo} alt="logo" width={209} height={101} />
        <NavbarSection navLinks={right} />
      </section>
    </main>
  );
}
