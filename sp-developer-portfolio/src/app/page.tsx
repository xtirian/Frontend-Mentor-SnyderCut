'use client';
import "./globals.css";
import React, { useRef } from "react";


//COMPONENTS
import Projects from "../views/projects";
import Footer from "../components/footer";
import HeroBanner from "@/components/hero-banner";
import Stacks from "@/views/stacks";

export default function Home() {

  const divRef = useRef<HTMLDivElement>(null);

  const scrollToElement = () => {
    const { current } = divRef;
    if (current !== null) {
      current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <main className="h-auto">
      <HeroBanner scrollIntoView={scrollToElement} />
      <Stacks />
      <Projects scrollIntoView={scrollToElement} />     
      <Footer divRef={divRef} />
    </main>
  );
}
