import AboutUs from "../../organisms/AboutUs/AboutUs";
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
      </main>
    </>
  );
}
