"use client";
import { useAppDispatch } from '@/redux/hooks';
import { InputSwitch } from 'primereact/inputswitch';
import { useEffect, useState } from "react";
import { LANG } from "@/utils/const/lang";
import { setLanguage } from '@/redux/features/langSlice';
import { useTranslation } from 'react-i18next';

export default function LangSwitch() {
  
  const dispatch = useAppDispatch()
  const { t } = useTranslation();
  const [isLanguageChecked, setIsLanguageChecked] = useState<boolean>(false);
  const [tooltipLang, setTooltipLang] = useState('');

  const handleIsLanguageCheck = (e: {target: {value: boolean | string}} | React.ChangeEvent<HTMLInputElement>) => {
    const value: boolean = e.target.value ? !!(e.target.value) === true : false;
    setLang(value);
  };

  const setLang = (isEnglish: boolean) => {
    setIsLanguageChecked(isEnglish);
    const lang = isEnglish ? LANG.EN : LANG.ES;
    dispatch(setLanguage({lang}));
    setTooltipLang(isEnglish ? t('navbar.menu-switch-lang-es') : t('navbar.menu-switch-lang-en'));
  };

  useEffect(() => {
    if (window.localStorage.getItem('lang')) {
      setLang(window.localStorage.getItem('lang') === LANG.EN);
    } else {
      setLang(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InputSwitch checked={isLanguageChecked} onChange={handleIsLanguageCheck} tooltip={tooltipLang} tooltipOptions={{ position: 'bottom' }} />
  );
}
