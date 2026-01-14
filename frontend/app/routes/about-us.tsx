import type { Route } from "./+types/about-us";
import Footer from "~/common/footer";
import Navbar from "~/common/navbar";
import AboutUs from "~/components/About-Us/about-us";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arsana | About-Us" },
    { name: "About-Us", content: "Welcome to Arsana!" },
  ];
}

export default function Home() {
  return (
    <>
    <Navbar />
    <AboutUs />
    <Footer />
    </>
  );
}