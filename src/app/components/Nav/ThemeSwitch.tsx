"use client";
import { useAppDispatch } from '@/redux/hooks';
import { InputSwitch } from 'primereact/inputswitch';
import { useEffect, useState } from "react";
import { THEMENAME } from "@/utils/const/theme";
import { setThemeName } from '@/redux/features/themeSlice';
import { useTranslation } from 'react-i18next';

export default function ThemeSwitch() {
  
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [isThemeChecked, setIsThemeChecked] = useState<boolean>(false);
  const [tooltipTheme, setTooltipTheme] = useState('');

  const handleIsThemeCheck = (e: {target: {value: boolean | string}} | React.ChangeEvent<HTMLInputElement>) => {
    const value: boolean = e.target.value ? !!(e.target.value) === true : false;
    setTheme(value);
  };

  const setTheme = (isDark: boolean) => {
    setIsThemeChecked(isDark);
    const theme = isDark ? THEMENAME.DARK : THEMENAME.LIGHT;
    dispatch(setThemeName({theme}));
    setTooltipTheme(isDark ? t('navbar.menu-switch-theme-light') : t('navbar.menu-switch-theme-dark'));
  };

  useEffect(() => {
    if (window.localStorage.getItem('theme')) {
      setTheme(window.localStorage.getItem('theme') === THEMENAME.DARK);
    } else {
      setTheme(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InputSwitch checked={isThemeChecked} onChange={handleIsThemeCheck } tooltip={tooltipTheme} tooltipOptions={{ position: 'bottom' }}/>
  );
}
