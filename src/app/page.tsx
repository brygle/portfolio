"use client";
import { useTranslation } from 'react-i18next';
import About from './components/Sections/About';
import Studies from './components/Sections/Studies';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <About></About>
      <Studies></Studies>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
    </>
  );
}
