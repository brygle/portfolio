"use client";
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';

export default function Home() {
  return (
    <>
      <About></About>
      {/* <Studies></Studies> */}
      <Experience></Experience>
      <Skills></Skills>
      {/* <Projects></Projects> */}
    </>
  );
}
