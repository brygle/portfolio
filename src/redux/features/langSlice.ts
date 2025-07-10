import { LANG } from '@/utils/const/lang';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i18next from '@/utils/i18n/i18n'

const initialState = {
    lang: LANG.EN
}

export const langSlice = createSlice({
    name: "lang",
    initialState: initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<{lang: string}>) => {
            const { lang } = action.payload;
            state.lang = lang;
            const time = i18next.isInitialized ? 0 : 5000;
            setTimeout(() => {
                i18next.changeLanguage(lang);
            }, time);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('lang', lang);
            }
        }
    }
});

export const { setLanguage } = langSlice.actions;
export default langSlice.reducer;