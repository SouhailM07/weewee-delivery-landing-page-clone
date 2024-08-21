import AboutUs from "../../organisms/AboutUs/AboutUs";
import Counts from "../../organisms/Counts/Counts";
import FAQ from "../../organisms/FAQ/FAQ";
import Features from "../../organisms/Features/Features";
import Hero from "../../organisms/Hero/Hero";
import Navbar from "../../organisms/Navbar/Navbar";
import OurValues from "../../organisms/OurValues/OurValues";

export default function MainTemplate() {
  return (
    <>
      <Navbar />
      <main className="space-y-[4rem]">
        <Hero />
        <AboutUs />
        <OurValues />
        <Counts />
        <Features />
        <FAQ />
      </main>
    </>
  );
}
