"use client";

import Section from "../Layout/Section";
import Image from "next/image";

export default function Skills() {
  
  return (
    <Section id='skills'>
        <div>Skills</div>
        <Image
          src="/icons/css.png"
          alt="CSS"
          width={48}
          height={48}
        />
    </Section>
  );
}
