import { LANG } from '@/utils/const/lang';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lang: LANG.ES
}

export const langSlice = createSlice({
    name: "lang",
    initialState: localStorage.getItem('lang') ? { lang: localStorage.getItem('lang') } : initialState,
    reducers: {
        setSpanish: (state) => {
            state.lang = LANG.ES;
            localStorage.setItem('lang', LANG.ES);
        },
        setEnglish: (state) => {
            state.lang = LANG.EN
            localStorage.setItem('lang', LANG.EN);
        }
    }
});

export const { setSpanish, setEnglish } = langSlice.actions;
export default langSlice.reducer;