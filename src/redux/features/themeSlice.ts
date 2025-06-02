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
            if (theme === THEMENAME.LIGHT) {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
            } else {
                document.documentElement.classList.remove('light');
                document.documentElement.classList.add('dark');
            }
        }
    }
});

export const { setThemeName } = themeSlice.actions;
export default themeSlice.reducer;