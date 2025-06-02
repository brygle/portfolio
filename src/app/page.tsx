"use client";
import { setLanguage } from '@/redux/features/langSlice';
import { setThemeName } from '@/redux/features/themeSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { LANG } from '@/utils/const/lang';
import { THEMENAME } from '@/utils/const/theme';
import { InputSwitch } from 'primereact/inputswitch';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const [isThemeChecked, setIsThemeChecked] = useState<boolean>(false);
  const [isLanguageChecked, setIsLanguageChecked] = useState<boolean>(false);
  
  const handleIsThemeCheck = (e: {target: {value: boolean | string}} | React.ChangeEvent<HTMLInputElement>) => {
    const value: boolean = e.target.value ? !!(e.target.value) === true : false;
    setTheme(value);
  };

  const setTheme = (isDark: boolean) => {
    setIsThemeChecked(isDark);
    const theme = isDark ? THEMENAME.DARK : THEMENAME.LIGHT;
    dispatch(setThemeName({theme}));
  };

  const handleIsLanguageCheck = (e: {target: {value: boolean | string}} | React.ChangeEvent<HTMLInputElement>) => {
    const value: boolean = e.target.value ? !!(e.target.value) === true : false;
    setLang(value);
  };

  const setLang = (isEnglish: boolean) => {
    setIsLanguageChecked(isEnglish);
    const lang = isEnglish ? LANG.EN : LANG.ES;
    dispatch(setLanguage({lang}));
  };

  const theme = useAppSelector(state => state.themeReducer.themeName )
  const language = useAppSelector(state => state.langReducer.lang )
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (window.localStorage.getItem('lang')) {
      setLang(window.localStorage.getItem('lang') === LANG.EN);
    } else {
      setLang(true);
    }
    if (window.localStorage.getItem('theme')) {
      setTheme(window.localStorage.getItem('theme') === THEMENAME.DARK);
    } else {
      setTheme(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <InputSwitch checked={isThemeChecked} onChange={handleIsThemeCheck } /> 
        <div>Tema: {theme} </div>
      </div>
      <div>
        <InputSwitch checked={isLanguageChecked} onChange={handleIsLanguageCheck} /> 
        <div>Idioma: {language} </div>
      </div>
      <p>{t('Welcome to React')}</p>
    </div>
  );
}
