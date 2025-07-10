import { THEMENAME } from '@/utils/const/theme';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    themeName: THEMENAME.LIGHT
}

export const themeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        setThemeName: (state, action: PayloadAction<{theme: string}>) => {
            const { theme } = action.payload;
            state.themeName = theme;
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('theme', theme);
            }
            let cssFileName;
            if (theme === THEMENAME.LIGHT) {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                cssFileName = 'lara-light-blue';
            } else {
                document.documentElement.classList.remove('light');
                document.documentElement.classList.add('dark');
                cssFileName = 'lara-dark-blue';
            }

            const existingLink = document.getElementById('theme-css');
            const newLink = document.createElement('link');
            newLink.rel = 'stylesheet';
            newLink.id = 'theme-css';
            newLink.href = `/themes/${cssFileName}/theme.css`; // cargado desde /public
            newLink.onload = () => {
            if (existingLink) {
                existingLink.remove();
            }
            };
            document.head.appendChild(newLink);


        }
    }
});

export const { setThemeName } = themeSlice.actions;
export default themeSlice.reducer;