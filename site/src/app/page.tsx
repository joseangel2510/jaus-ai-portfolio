import { Hero } from "@/components/sections/hero";
import { StackMarquee } from "@/components/sections/stack-marquee";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Cases } from "@/components/sections/cases";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <About />
      <Services />
      <Cases />
      <Process />
      <Contact />
    </>
  );
}
