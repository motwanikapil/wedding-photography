import Navbar from "./_components/navbar/Navbar";
import Hero from "./_components/hero/Hero";
import AwardWinningPhotography from "./_components/award/AwardWinningPhotography";
import AuthorIntro from "./_components/author/AuthorIntro";
import Services from "./_components/services/Services";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AwardWinningPhotography />
      <AuthorIntro />
      <Services />
    </main>
  );
}
