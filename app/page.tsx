"use client";

import { Navbar }         from "@/components/Navbar";
import MotionExtras       from "@/components/MotionExtras";
import Hero               from "@/components/Hero";
import KineticStatement   from "@/components/KineticStatement";
import About              from "@/components/About";
import Stack              from "@/components/Stack";
import Projects           from "@/components/Projects";
import Now                from "@/components/Now";
import Quote              from "@/components/Quote";
import Contact            from "@/components/Contact";

export default function Home() {
  return (
    <>
      <MotionExtras />
      <Navbar />
      <main>
        <Hero />
        <KineticStatement />
        <About />
        <Stack />
        <Projects />
        <Now />
        <Quote />
        <Contact />
      </main>
    </>
  );
}
