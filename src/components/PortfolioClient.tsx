"use client";

import { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Pedigree from "./Pedigree";
import LensSelector from "./LensSelector";
import FlagshipGrid from "./FlagshipGrid";
import Timeline from "./Timeline";
import ExperienceSection from "./ExperienceSection";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { IndustryId } from "@/data/types";

export default function PortfolioClient() {
  const [lens, setLens] = useState<IndustryId | null>(null);

  return (
    <main className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-5xl mx-auto px-4">
        <Nav />
        <Hero lens={lens} />
        <Pedigree />
        <div className="pb-4">
          <LensSelector active={lens} onChange={setLens} />
        </div>
        <FlagshipGrid lens={lens} />
        {!lens && <Timeline />}
        <ExperienceSection lens={lens} />
        <About />
        <Contact lens={lens} />
        <Footer />
      </div>
    </main>
  );
}
