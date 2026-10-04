import React from "react";
import { Hero } from "@/components/sections/Hero/Hero";
import { Technologies } from "@/components/sections/Technologies/Technologies";
import { Capabilities } from "@/components/sections/Capabilities/Capabilities";
import { FlagshipProjects } from "@/components/sections/FlagshipProjects/FlagshipProjects";
import { OtherProjects } from "@/components/sections/OtherProjects/OtherProjects";
import { Evidence } from "@/components/sections/Evidence/Evidence";
import { Approach } from "@/components/sections/Approach/Approach";
import { About } from "@/components/sections/About/About";
import { Writing } from "@/components/sections/Writing/Writing";
import { Contact } from "@/components/sections/Contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Technologies />
      <Capabilities />
      <FlagshipProjects />
      <OtherProjects />
      <Evidence />
      <Approach />
      <About />
      <Writing />
      <Contact />
    </>
  );
}
