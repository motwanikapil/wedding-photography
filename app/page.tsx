import Navbar from "./_components/navbar/Navbar";
import Hero from "./_components/hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
    </main>
  );
}
