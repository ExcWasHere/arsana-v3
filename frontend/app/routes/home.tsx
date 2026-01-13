import IndexHero from "~/components/HomePage/introduction";
import type { Route } from "./+types/home";
import IndexFeatures from "~/components/HomePage/description";
import IndexIntroduction from "~/components/HomePage/tipsToUse";
import Footer from "~/common/footer";
import Navbar from "~/common/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BeParent | Home" },
    { name: "Home", content: "Welcome to BeParent!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <IndexHero />
      <IndexFeatures />
      <IndexIntroduction />
      <Footer />
    </>
  );
}