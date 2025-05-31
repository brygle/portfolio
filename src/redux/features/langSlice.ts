import { LANG } from '@/utils/const/lang';
import { createSlice } from '@reduxjs/toolkit';
import i18next from '@/utils/i18n/i18n'

const initialState = {
    lang: LANG.EN
}

export const langSlice = createSlice({
    name: "lang",
    initialState: window?.localStorage.getItem('lang') ? { lang: window?.localStorage.getItem('lang') } : initialState,
    reducers: {
        setSpanish: (state) => {
            state.lang = LANG.ES;
            window?.localStorage.setItem('lang', LANG.ES);
            i18next.changeLanguage(LANG.ES);
        },
        setEnglish: (state) => {
            state.lang = LANG.EN
            window?.localStorage.setItem('lang', LANG.EN);
            i18next.changeLanguage(LANG.EN);
        }
    }
});

export const { setSpanish, setEnglish } = langSlice.actions;
export default langSlice.reducer;