import Header from "../components/Section/Header";
import About from "../components/Section/About";
import Skills from "../components/Section/Skills";
import { Line } from "../components/Common/Button";
import Projects from "../components/Section/Projects";

export default function LandingPage() {
  return (
    <section className="bg-[#101820] w-full  ">
      <Header />
      <About />
      <Line />

      <Skills />

      <Line />
      <Projects />
    </section>
  );
}
