"use client";
import { Menubar } from 'primereact/menubar';
import { MenuItem } from "primereact/menuitem";
import { useEffect } from "react";
import LangSwitch from './LangSwitch';
import ThemeSwitch from './ThemeSwitch';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();
  const items: MenuItem[] = [
    {
      label: t('navbar.menu-home'),
      url: '#home'
    },
    {
      label: t('navbar.menu-about'),
      url: '#about'
    },
    {
      label: t('navbar.menu-studies'),
      url: '#studies'
    },
    {
      label: t('navbar.menu-skills'),
      url: '#skills'
    },
    {
      label: t('navbar.menu-experience'),
      url: '#experience'
    },
    {
      label: t('navbar.menu-projects'),
      url: '#projects'
    }
  ]

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header>
        <nav>
            <div className="grid grid-cols-[1fr_90px_90px]">
                <Menubar className="dark:bg-black" model={items} />
                <div className="w-full flex items-center justify-center">
                  <ThemeSwitch></ThemeSwitch>
                </div>
                <div className="w-full flex items-center justify-center">
                  <LangSwitch></LangSwitch>
                </div>
            </div>
        </nav>
    </header>
  );
}
