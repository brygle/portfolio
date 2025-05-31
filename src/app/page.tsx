"use client";
import { setEnglish, setSpanish } from '@/redux/features/langSlice';
import { setDark, setLight } from '@/redux/features/themeSlice';
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
  
  const handleIsThemeCheck = (e: any) => {
    setIsThemeChecked(e.value);
    if (e.value) {
      dispatch(setDark());
    } else {
      dispatch(setLight());
    }
  };

  const handleIsLanguageCheck = (e: any) => {
    setIsLanguageChecked(e.value);
    if (e.value) {
      dispatch(setEnglish());
    } else {
      dispatch(setSpanish());
    }
  };

  const theme = useAppSelector(state => state.themeReducer.themeName )
  const language = useAppSelector(state => state.langReducer.lang )
  const dispatch = useAppDispatch()

  useEffect(() => {
    handleIsThemeCheck({value: theme === THEMENAME.DARK});
    handleIsLanguageCheck({value: language === LANG.EN});
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <InputSwitch checked={isThemeChecked} onChange={handleIsThemeCheck} /> 
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
