import Contact from "../../organisms/Contact/Contact";
import AboutUs from "../../organisms/AboutUs/AboutUs";
import Blog from "../../organisms/Blog/Blog";
import Counts from "../../organisms/Counts/Counts";
import FAQ from "../../organisms/FAQ/FAQ";
import Features from "../../organisms/Features/Features";
import Hero from "../../organisms/Hero/Hero";
import Navbar from "../../organisms/Navbar/Navbar";
import OurValues from "../../organisms/OurValues/OurValues";
import Testimonials from "../../organisms/Testimonials/Testimonials";

export default function MainTemplate() {
  return (
    <>
      <Navbar />
      <main className="space-y-[5rem]">
        <Hero />
        <AboutUs />
        <OurValues />
        <Counts />
        <Features />
        <FAQ />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
