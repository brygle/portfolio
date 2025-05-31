import { THEMENAME } from '@/utils/const/theme';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    themeName: THEMENAME.LIGHT
}

export const themeSlice = createSlice({
    name: "theme",
    initialState: window?.localStorage.getItem('theme') ? { themeName: window?.localStorage.getItem('theme') } : initialState,
    reducers: {
        setLight: (state) => {
            state.themeName = THEMENAME.LIGHT
            window?.localStorage.setItem('theme', THEMENAME.LIGHT);
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        },
        setDark: (state) => {
            state.themeName = THEMENAME.DARK
            window?.localStorage.setItem('theme', THEMENAME.DARK);
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        }
    }
});

export const { setLight, setDark } = themeSlice.actions;
export default themeSlice.reducer;