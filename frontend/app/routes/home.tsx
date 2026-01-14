import IndexHero from "~/components/HomePage/introduction";
import type { Route } from "./+types/home";
import IndexFeatures from "~/components/HomePage/description";
import IndexIntroduction from "~/components/HomePage/tipsToUse";
import Footer from "~/common/footer";
import Navbar from "~/common/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arsana | Home" },
    { name: "Home", content: "Welcome to Arsana!" },
  ];
}

export default function Home() {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/latar-belakang.svg')" }}
    >
      <Navbar />
      <IndexHero />
      <IndexFeatures />
      <IndexIntroduction />
      <Footer />
    </div>
  );
}
